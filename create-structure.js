const fs = require('fs');
const path = require('path');

// Estructura de carpetas y archivos
const structure = {
    'src': {
        'main': {
            'typescript': {
                'pages': {},
                'stepdefs': {},
                'utils': {},
            },
        },
        'test': {
            'resources': {
                'features': {},
            },
            'typescript': {
                'runners': {},
            },
        },
    },
    'target': {},
};

// Función para crear carpetas y archivos
function createStructure(basePath, structure) {
    for (const [name, content] of Object.entries(structure)) {
        const newPath = path.join(basePath, name);
        if (typeof content === 'object' && !Array.isArray(content)) {
            // Crear carpeta
            fs.mkdirSync(newPath, { recursive: true });
            console.log(`Carpeta creada: ${newPath}`);
            // Recursividad para subcarpetas
            createStructure(newPath, content);
        } else {
            // Crear archivo
            fs.writeFileSync(newPath, '');
            console.log(`Archivo creado: ${newPath}`);
        }
    }
}

// Crear la estructura
createStructure(__dirname, structure);