// utils/cn.ts

// Define the shape of possible inputs: string or a conditional object.
type ClassValue = 
  | string 
  | { [key: string]: any } // Conditional object: { 'class-name': boolean }
  | null 
  | undefined 
  | boolean;

/**
 * The ultimate minimal utility to merge Tailwind CSS class strings.
 * It primarily handles strings and conditional objects.
 *
 * @param {...ClassValue} args - Class names to merge.
 * @returns {string} The final, merged class string.
 */
export default function cn(...args: ClassValue[]): string {
  const finalClasses: string[] = [];

  for (const arg of args) {
    if (!arg) continue; // Skip falsy values (null, undefined, false).

    if (typeof arg === 'string') {
      // 1. Handle simple strings.
      finalClasses.push(arg);
    } 
    
    else if (typeof arg === 'object' && !Array.isArray(arg)) {
      // 2. Handle conditional objects { 'class-name': boolean }
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          finalClasses.push(key);
        }
      }
    } 
    
    // We intentionally skip a complex error check here to keep it simple, 
    // relying on the type definition and simple string/object checks.
  }

  return finalClasses.join(' ');
}