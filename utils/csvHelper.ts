/**
 * Parses a standard CSV string into an array of objects.
 * Handles quoted fields, embedded newlines, and escaped quotes ("").
 */
export function parseCSV<T = any>(csvText: string): T[] {
  const result: T[] = [];
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentVal = '';
  let insideQuote = false;
  
  // Normalize line endings to avoid issues with different OS formats
  const text = csvText.replace(/\r\n/g, '\n');

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        // Handle escaped quote ("") -> becomes (")
        currentVal += '"';
        i++; // Skip the next quote
      } else {
        // Toggle quote state
        insideQuote = !insideQuote;
      }
    } else if (char === ',' && !insideQuote) {
      // End of field
      currentRow.push(currentVal);
      currentVal = '';
    } else if (char === '\n' && !insideQuote) {
      // End of row
      currentRow.push(currentVal);
      lines.push(currentRow);
      currentRow = [];
      currentVal = '';
    } else {
      // Regular character
      currentVal += char;
    }
  }
  
  // Handle the very last field/row if no newline at end of file
  if (currentVal || currentRow.length > 0) {
      currentRow.push(currentVal);
      lines.push(currentRow);
  }

  if (lines.length === 0) return [];

  // Extract headers
  const headers = lines[0].map(h => h.trim());
  
  // Map rows to objects
  for (let i = 1; i < lines.length; i++) {
    const rowValues = lines[i];
    // Skip empty rows
    if (rowValues.length === 0 || (rowValues.length === 1 && !rowValues[0].trim())) continue;

    const obj: any = {};
    headers.forEach((header, index) => {
        // Map value to header, default to empty string if missing
        let val = rowValues[index] || '';
        // Unescape literal \n characters if they were written as text
        obj[header] = val.trim().replace(/\\n/g, '\n'); 
    });
    result.push(obj);
  }
  
  return result;
}
