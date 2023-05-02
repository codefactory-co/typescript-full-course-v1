/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;