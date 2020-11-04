// Has Local type for property pair
// Support collapsing for large data or sub objects
// Will need to support number, string, object and array uniquely

// Display object properties by mapping state with PairType
// On-load property: 
// - Attempt to parse passed text as JSON
//   - Set state to has failed, do not modify RequestContext on leave
//   - If passed, store object within state
// On-Store property:
// - If valid, convert object to JSON text and return