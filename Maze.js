let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '*', '*', '*', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'exit']
    ];


                                        // x is 0 (top left of 'maze', position: first array, first index of first array)
const mazeOnePath = (x, y, maze) => {   // y is 0 (top left of 'maze', position: first array, first index of first array)
                                        // using 'maze' as our input (coincidentally the same name as our array of arrays)

    const rows = maze.length - 1            // maze.length = gets last row in maze -- in this case (0-4)
    const columns = maze[0].length - 1      // maze[0].length = gets last column in maze by index -- in this case (0-6)


    // Base Cases
    if (x < 0 || x > columns || y < 0 || y > rows)      // if x is a neg number or it's greater than the amount of arrays present (0-4)
                                                        // OR 
                                                        // if y is a neg number or it's greater than the amount of indexes in the array (0-6)
        return '  Please input values for x and >= 0'



    if (maze[y][x] === 'exit')                          // if maze is at the point where 'exit' is present in row AND column index
        return `  Reached exit at ${x}:${y}`

    // Recursive Cases
    if (maze[y][x + 1] !== '*' && x < columns) {        // if maze is at a point where the ROW index does NOT have an * present
                                                        // AND if it is LESS than the height of the column it's in

        maze[y][x] = '*'                                // mark that spot as passed with a ' * '
        return '--> ' + mazeOnePath(x + 1, y, maze)     // recursive call for a move to the RIGHT in the row, by adding 1 to ROW
    }

    if (maze[y][x - 1] !== '*' && x >= 0) {             // if maze is at a point where the ROW index does NOT have an * present
                                                        // AND if it is MORE than or EQUAL TO 0

        maze[y][x] = '*'                                // mark that spot as passed with a ' * '  
        return '<-- ' + mazeOnePath(x - 1, y, maze)     // recursive call for a move to the LEFT in the row, by subtracting 1 from ROW
    }



    if (maze[y + 1][x] !== '*' && y < rows) {           // if maze is at a point where the COLUMN index does NOT have an * present
                                                        // AND if it is LESS than the length of the row it's in
                                                            
        maze[y][x] = '*'                                // mark that spot as passed with a ' * '
        return `D ` + mazeOnePath(x, y + 1, maze)       // recursive call for a move DOWN in the column, by adding 1 to COLUMN
    }

    if (maze[y - 1][x] !== '*' && y >= 0) {             // if maze is at a point where the COLUMN index does NOT have an * present
                                                        // AND if it is MORE than or EQUAL TO 0

        maze[y][x] = '*'                                // mark that spot as passed with a ' * '
        return '^ ' + mazeOnePath(x, y - 1, maze)       // recursive call for a move UP in the column, by adding subtracting 1 from COLUMN 
    }
}

console.log(mazeOnePath(0, 0, maze))