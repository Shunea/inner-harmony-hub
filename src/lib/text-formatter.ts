/**
 * Utility function to format text from backend that contains markdown-style formatting
 * Handles:
 * - Line breaks (\r\n)
 * - Bold text (**text**)
 * - Bullet points (•, ◦, or encoded bullets)
 * - JSON array lists (["item1", "item2"])
 */
export const formatBackendText = (text: string): string => {
  if (!text) return '';

  let formatted = text;

  // Check if the text is a JSON array (for lists like "Ce include:")
  if (text.trim().startsWith('[') && text.trim().endsWith(']')) {
    try {
      const items = JSON.parse(text);
      if (Array.isArray(items)) {
        return `<ul class="list-disc list-inside space-y-2 my-4">${items.map(item => `<li>${item}</li>`).join('\n')}</ul>`;
      }
    } catch (e) {
      // Not valid JSON, continue with normal processing
    }
  }

  // Convert Windows line breaks to HTML line breaks
  formatted = formatted.replace(/\r\n/g, '<br />');

  // Convert **text** to <strong>text</strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert bullet points to proper list items
  // Look for lines that start with •, ◦, or the encoded version
  const lines = formatted.split('<br />');
  let inList = false;
  const processedLines: string[] = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Check if line starts with any bullet point character
    const isBulletPoint = /^[•◦▪▫–—\u0432\u0402\u045e]/.test(trimmedLine);

    if (isBulletPoint) {
      // Start of a list item
      if (!inList) {
        processedLines.push('<ul class="list-disc list-inside space-y-2 my-4">');
        inList = true;
      }
      // Remove the bullet (first character or first few chars) and wrap in <li>
      const listItem = trimmedLine.replace(/^[•◦▪▫–—\u0432\u0402\u045e]\s*/, '').trim();
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
