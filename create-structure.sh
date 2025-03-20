#!/bin/bash

# Crear estructura de carpetas
mkdir -p src/main/java/pages
mkdir -p src/main/java/stepdefs
mkdir -p src/main/java/utils
mkdir -p src/test/resources/features
mkdir -p src/test/java/runners
mkdir -p target

# Crear archivos vacíos (opcional)
touch src/main/java/pages/HomePage.java
touch src/main/java/stepdefs/SearchFlightsSteps.java
touch src/test/resources/features/search_flights.feature
touch src/test/java/runners/CucumberRunner.java

echo "Estructura de carpetas y archivos creada."