package org.adempiere.webui.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.logging.Level;

import org.adempiere.exceptions.AdempiereException;
import org.adempiere.webui.apps.AEnv;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellValue;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.util.IOUtils;
import org.compiere.model.MImage;
import org.compiere.model.MSysConfig;
import org.compiere.util.CLogger;
import org.compiere.util.Env;
import org.compiere.util.Util;
import org.jopendocument.dom.spreadsheet.MutableCell;
import org.jopendocument.dom.spreadsheet.SpreadSheet;
import org.zkoss.util.media.AMedia;
import org.zkoss.util.media.Media;
import org.zkoss.zk.ui.Executions;

/**
 * @author Sachin Bhimani
 */
public class ZKUtils
{

	private static final String	SEPARATOR_CSV	= ",";
	
	private static final int ZK_MAX_UPLOAD_SIZE = 16*1024*1024;
	
	/** Logger */
	private static CLogger log = CLogger.getCLogger(ZKUtils.class);

	/**
	 * @param filename
	 * @param logoID
	 */
	public static void createImageFromLogoID(String filename, int logoID)
	{
		if (Util.isEmpty(filename, true))
		{
			throw new AdempiereException("Must require Image file name.");
		}

		MImage image = MImage.get(Env.getCtx(), logoID);
		String logoFilePath = Executions.getCurrent().getDesktop().getWebApp().getRealPath("") + File.separator
				+ filename;
		try
		{
			FileOutputStream outStream = new FileOutputStream(logoFilePath);
			outStream.write(image.getBinaryData());
			outStream.close();
		}
		catch (IOException e)
		{
			log.log(Level.SEVERE, "Could not write logo file, using default", e);
		}
	} // createImageFromLogoID

	/**
	 * @return Max Upload size in KB
	 */
	public static int getMaxUploadSize()
	{
		
		int size = ZK_MAX_UPLOAD_SIZE;
		if (size <= 0)
			size = AEnv.getDesktop().getWebApp().getConfiguration().getMaxUploadSize();
		if (size <= 0)
			size = 5; // Default if not found

		return size * 1024;
	} // getMaxUploadSize
	
	
	/**
	 * convert XLS file to CSV file.
	 * 
	 * @param media XLS
	 * @return CSV media
	 */
	public static Media converXLSToCSV(Media media)
	{
		Media csvmedia = null;
		if (media.isBinary())
		{
			InputStream iStream = media.getStreamData();
			if (iStream == null)
			{
				return null;
			}

			File file = null;
			try
			{
				// For storing data into CSV files
				StringBuffer data = new StringBuffer();

				file = new File(media.getName());
				OutputStream outputStream = new FileOutputStream(file);
				IOUtils.copy(iStream, outputStream);
				outputStream.close();
				Workbook workBook;
				try
				{
					workBook = WorkbookFactory.create(new FileInputStream(file));
					// new HSSFWorkbook(new FileInputStream(file));
					Sheet sheet = workBook.getSheetAt(0);
					int lastline = sheet.getLastRowNum();

					for (int i = 0; i <= lastline; i++)
					{
						Row row = sheet.getRow(i);
						int lastcell = row.getLastCellNum();
						for (int j = 0; j < lastcell; j++)
						{
							Cell cell = row.getCell(j);

							int cellType;
							if (cell == null)
								cellType = Cell.CELL_TYPE_BLANK;
							else
								cellType = cell.getCellType();

							String value = "";
							switch (cellType)
							{
								case Cell.CELL_TYPE_STRING:
									value = String.valueOf(cell.getRichStringCellValue());
									break;
								case Cell.CELL_TYPE_NUMERIC:
									if (DateUtil.isCellDateFormatted(cell))
									{
										DataFormatter df = new DataFormatter();
										value = String.valueOf(df.formatCellValue(cell));
									}
									else
									{
										value = String.valueOf(cell.getNumericCellValue());
									}
									break;
								case Cell.CELL_TYPE_BOOLEAN:
									value = String.valueOf(cell.getBooleanCellValue());
									break;
								case Cell.CELL_TYPE_ERROR:
									value = String.valueOf(cell.getErrorCellValue());
									break;
								case Cell.CELL_TYPE_BLANK:
									value = " ";
									break;

								case Cell.CELL_TYPE_FORMULA:
									if (cell.getCachedFormulaResultType() == Cell.CELL_TYPE_ERROR)
									{
										value = String.valueOf(cell.getCellFormula());
									}
									else
									{
										FormulaEvaluator formulaEval = workBook.getCreationHelper()
												.createFormulaEvaluator();
										CellValue cellValue = formulaEval.evaluate(cell);
										value = String.valueOf(cellValue.formatAsString());
									}
									break;
								default:
									value = cell.getStringCellValue();
							}
							data.append(value);

							if (j != lastcell - 1)
								data.append(SEPARATOR_CSV);
						} // Cell
						data.append('\n');
					} // Row
					csvmedia = new AMedia(media.getName().substring(0, media.getName().lastIndexOf(".")) + ".csv",
							"csv", "csv", data.toString());
				}
				catch (Exception e)
				{
					log.severe(e.getMessage());
				}

			}
			catch (IOException e)
			{
				throw new AdempiereException(e);
			}
			finally
			{
				if (file == null)
				{
					throw new AdempiereException("File not found");
				}
				if (csvmedia == null)
				{
					throw new AdempiereException("File not converted from XLS to CSV");
				}
			}
		}
		return csvmedia;
	} // converXlsToCsv

	/**
	 * convert ODS file to CSV file.
	 * 
	 * @param media ODS
	 * @return CSV media
	 */
	public static Media converODSToCSV(Media media)
	{
		Media csvmedia = null;
		if (media.isBinary())
		{
			InputStream iStream = media.getStreamData();
			File file = null;
			try
			{
				// For storing data into CSV files
				StringBuffer data = new StringBuffer();

				file = new File(media.getName());
				OutputStream outputStream = new FileOutputStream(file);
				IOUtils.copy(iStream, outputStream);
				outputStream.close();

				SpreadSheet swbook = SpreadSheet.createFromFile(file);
				org.jopendocument.dom.spreadsheet.Sheet sheet = swbook.getSheet(0);
				int rowCount = sheet.getRowCount();
				int columnCount = sheet.getColumnCount();
				for (int i = 0; i < rowCount; i++)
				{
					for (int j = 0; j < columnCount; j++)
					{
						MutableCell<SpreadSheet> cell = sheet.getCellAt(j, i);
						data.append(cell.getTextValue());
						// String.valueOf(cell.getValue())
						if (j != columnCount - 1)
							data.append(SEPARATOR_CSV);
					} // column

					data.append('\n');
				} // row

				csvmedia = new AMedia(media.getName().substring(0, media.getName().lastIndexOf(".")) + ".csv", "csv",
						"csv", data.toString());
			}
			catch (Exception e)
			{
				System.out.println("" + e);
			}
			finally
			{
				if (file == null)
				{
					throw new AdempiereException("File not found");
				}
				if (csvmedia == null)
				{
					throw new AdempiereException("File not converted from ODS to CSV");
				}
			}
		}
		return csvmedia;
	} // converODSToCSV
}
