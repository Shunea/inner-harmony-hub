/**
 * Utility function to format text from backend that contains markdown-style formatting
 * Handles:
 * - Line breaks (\r\n)
 * - Bold text (**text**)
 * - Bullet points (•)
 */
export const formatBackendText = (text: string): string => {
  if (!text) return '';

  let formatted = text;

  // Convert Windows line breaks to HTML line breaks
  formatted = formatted.replace(/\r\n/g, '<br />');

  // Convert **text** to <strong>text</strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert bullet points to proper list items
  // Look for lines that start with •
  const lines = formatted.split('<br />');
  let inList = false;
  const processedLines: string[] = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('•')) {
      // Start of a list item
      if (!inList) {
        processedLines.push('<ul class="list-disc list-inside space-y-2 my-4">');
        inList = true;
      }
      // Remove the bullet and wrap in <li>
      const listItem = trimmedLine.substring(1).trim();
      processedLines.push(`<li>${listItem}</li>`);
    } else {
      // Not a list item
      if (inList && trimmedLine) {
        // Close the list if we were in one
        processedLines.push('</ul>');
        inList = false;
      }
      if (trimmedLine) {
        processedLines.push(line);
      }
    }

    // Close list at the end if still open
    if (index === lines.length - 1 && inList) {
      processedLines.push('</ul>');
    }
  });

  return processedLines.join('\n');
};
