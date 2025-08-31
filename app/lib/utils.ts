/**
 * Utilities for small helpers used across the app.
 *
 * This file currently contains `formatSize` which converts a byte count into
 * a human-readable string (B, KB, MB, GB, TB) using binary multiples (1024).
 */

/**
 * Convert a raw byte count into a human-readable string.
 *
 * Uses binary multiples where 1 KB = 1024 bytes. Values under 1024 are
 * shown in bytes without decimals. For KB and above the value is shown with
 * two decimal places for consistent UX.
 *
 * Examples:
 *  - formatSize(500)       -> "500 B"
 *  - formatSize(2048)      -> "2.00 KB"
 *  - formatSize(5_242_880) -> "5.00 MB"
 *
 * Edge cases:
 *  - `undefined`, `null` or `NaN` -> returns "0 B"
 *  - Values larger than TB will be shown in TB (capped to TB unit)
 *
 * @param bytes - size in bytes
 * @returns formatted size string
 */
export function formatSize(bytes: number): string {
  if (bytes === undefined || bytes === null || Number.isNaN(bytes)) {
    return "0 B";
  }

  if (bytes < 1024) {
    // Show raw bytes as whole numbers for readability.
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB", "TB"];
  let value = bytes / 1024; // Start at KB
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}

export const generateUUID = () => crypto.randomUUID();
