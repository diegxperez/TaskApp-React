# 📝 TaskApp - Aplicación de Lista de Tareas Moderna

> Una aplicación profesional, accesible y completa para gestión de tareas, construida con React 19, TypeScript y Vite. Creada como proyecto de aprendizaje demostrando mejores prácticas modernas de React y código limpio.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-8.0+-F69220?logo=pnpm&logoColor=white)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Inicio Rápido](#-inicio-rápido)
- [Viaje del Proyecto](#-viaje-del-proyecto-7-días-de-aprendizaje)
- [Lo Que Construimos](#️-lo-que-construimos)
- [Aprendizajes Clave](#-aprendizajes-clave)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías y Patrones](#️-tecnologías-y-patrones)
- [Despliegue](#-despliegue)
- [Scripts Disponibles](#-scripts-disponibles)

---

## ✨ Características

### Funcionalidad Principal
- ✅ **Operaciones CRUD Completas** - Crear, Leer, Actualizar, Eliminar tareas
- 💾 **Almacenamiento Persistente** - Auto-guardado en LocalStorage
- 🎯 **Filtrado Inteligente** - Ver todas, completadas o pendientes
- ✏️ **Edición Profesional** - Modal con soporte de teclado (ESC para cerrar)
- 📊 **Contadores en Vivo** - Estadísticas en tiempo real por filtro

### Experiencia de Usuario
- 🎨 **Interfaz Limpia** - Diseño moderno con CSS Modules
- ⌨️ **Navegación por Teclado** - Enter para agregar, ESC para cerrar modal
- 📱 **Diseño Responsivo** - Funciona en todos los tamaños de pantalla
- 🔔 **Validación en Tiempo Real** - Feedback con contador de caracteres
- ♿ **Totalmente Accesible** - Etiquetas ARIA para lectores de pantalla

### Calidad de Código
- 🔒 **Type-Safe** - 100% TypeScript en modo estricto
- ⚡ **Optimizado** - useMemo para rendimiento
- 📦 **Cero Dependencias UI** - React puro, sin librerías de UI
- 🎯 **Mejores Prácticas** - Principios DRY y SOLID aplicados

---

## 🚀 Inicio Rápido

### Prerequisitos

- **Node.js** 18+ ([Descargar](https://nodejs.org/))
- **pnpm** 8+ (Instalar: `npm install -g pnpm`)

### Instalación

```bash
# 1. Clonar el repositorio
git clone <url-de-tu-repo>
cd TaskApp

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev
```

La aplicación se abrirá en **http://localhost:5173** 🎉

### Construir para Producción

```bash
# Construir bundle optimizado
pnpm build

# Previsualizar build de producción localmente
pnpm preview
```

---

## 📖 Viaje del Proyecto: 7 Días de Aprendizaje

### **Día 7 - 31 de Octubre, 2025** 
Sesión final de refactorización enfocada en calidad de código y mejores prácticas:

#### Logros de la Sesión ✅

**1. Limpieza y Organización de CSS (15 min)**
- Eliminado todo el código comentado en `index.css`
- Creadas variables CSS para tematización consistente:
  - `--color-error`, `--color-error-bg`
  - `--color-button-brown-hover`, `--color-disabled`
- Migrados estilos inline a clases CSS
- Añadida clase `.todoitem_description_completed`

**2. Patrones Avanzados de TypeScript (20 min)**
- Implementado `as const` para constantes de tipos de acciones
- Creado `taskActions.ts` con objeto TASK_ACTIONS
- Aprendida la diferencia entre `as const` vs `enum`
- Aplicado dispatch de acciones type-safe

**3. Mejoras de Accesibilidad (10 min)**
- Añadido `aria-label` a todos los botones interactivos
- Implementadas etiquetas contextuales: "Editar tarea: {descripción}"
- Mejorado checkbox con etiquetas conscientes del estado
- Logrado soporte completo de lectores de pantalla

#### Antes vs Después

**Antes (Día 1-6):**
- Estilos inline dispersos en componentes
- Strings mágicos para tipos de acciones
- Atributos de accesibilidad faltantes
- 87 líneas en componente principal

**Después (Día 7):**
- Todos los estilos en módulos CSS
- Constantes type-safe con `as const`
- Implementación completa de etiquetas ARIA
- 30 líneas en componente principal (¡65% de reducción!)

---

## 🏗️ Lo Que Construimos

### Fase 1: Fundación (Días 1-3)
- ✅ Funcionalidad CRUD básica con useState
- ✅ Estructura de componentes (Navbar, TodoInput, TodoList)
- ✅ Configuración de CSS Modules
- ✅ Interfaces de TypeScript

### Fase 2: Gestión de Estado (Días 4-5)
- ✅ Migrado al patrón useReducer
- ✅ Creados custom hooks (useTasks, useLocalStorage)
- ✅ Implementado TabsList con filtrado
- ✅ Añadidos contadores de tareas con useMemo

### Fase 3: UX y Validación (Día 6)
- ✅ Convertido TodoInput a componente controlado
- ✅ Validación de entrada con límites de caracteres
- ✅ EditModal profesional con animaciones
- ✅ Atajos de teclado (Enter, ESC)

### Fase 4: Refactorización y Pulido (Día 7)
- ✅ Extraídas utilidades de validación (principio DRY)
- ✅ Creadas constantes de acciones (seguridad de tipos)
- ✅ Variables CSS para tematización
- ✅ Accesibilidad con etiquetas ARIA
- ✅ Limpieza de código y documentación

---

## 🎓 Aprendizajes Clave

### Conceptos de React Dominados

#### 1. **Evolución de Gestión de Estado**
```typescript
// Comenzamos con: useState (simple)
const [tasks, setTasks] = useState([])

// Evolucionamos a: useReducer (escalable)
const [state, dispatch] = useReducer(taskReducer, initialState)

// Beneficios aprendidos:
// - Actualizaciones de estado predecibles
// - Mejor para lógica compleja
// - Más fácil de testear
```

#### 2. **Patrón de Custom Hooks**
```typescript
// Extraer lógica → Reutilización
export const useTasks = () => {
  // Toda la lógica de tareas aquí
  return { addTask, deleteTask, editTask }
}

// Componente limpio:
const TaskApp = () => {
  const { addTask } = useTasks()
  // El componente se enfoca solo en UI
}
```

#### 3. **Componentes Controlados**
```typescript
// No controlado (❌ control limitado):
<input ref={inputRef} />

// Controlado (✅ control completo):
<input value={value} onChange={handleChange} />
```

#### 4. **Optimización de Rendimiento**
```typescript
// useMemo previene recálculos innecesarios
const taskCounts = useMemo(() => {
  return {
    all: state.length,
    completed: state.filter(t => t.isCompleted).length
  }
}, [state]) // Solo recalcula cuando state cambia
```

### Patrones de TypeScript

#### 5. **`as const` para Seguridad de Tipos**
```typescript
// Sin as const:
const ACTIONS = { ADD: "ADD" } // tipo: { ADD: string }

// Con as const:
const ACTIONS = { ADD: "ADD" } as const // tipo: { ADD: "ADD" }

// Beneficio: TypeScript detecta errores tipográficos
dispatch({ type: ACTIONS.ADD }) // ✅
dispatch({ type: "ADDD" }) // ❌ Error!
```

#### 6. **Tipos Union para Acciones**
```typescript
type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string }
  
// TypeScript sabe qué tipo de payload para cada acción
```

### CSS y Estilos

#### 7. **Beneficios de CSS Modules**
- ✅ Estilos con scope (sin conflictos de nombres de clases)
- ✅ Mejor que estilos inline (rendimiento)
- ✅ Reutilizable con utilidad `cn()`

#### 8. **Variables CSS para Tematización**
```css
:root {
  --color-error: #ff6b6b;
}
/* Cambiar tema: modificar 1 variable en lugar de 10+ lugares */
```

### Mejores Prácticas

#### 9. **Principio DRY**
```typescript
// Antes: Código de validación duplicado
// TodoInput.tsx: validateTask()
// EditModal.tsx: validateTask() (copiar-pegar)

// Después: Única fuente de verdad
// utils/taskValidation.ts: validateTask()
```

#### 10. **Accesibilidad Primero**
```tsx
<button 
  aria-label={`Editar tarea: ${description}`}
>
  Editar
</button>
// Los lectores de pantalla ahora proporcionan contexto
```

---

## 📂 Estructura del Proyecto

```
TaskApp/
├── public/                    # Assets estáticos
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   ├── TabsList/          # Tabs de filtro con contadores
│   │   │   ├── TabsList.tsx
│   │   │   └── TabsList.module.css
│   │   ├── TodoInput/         # Input controlado
│   │   │   ├── TodoInput.tsx
│   │   │   └── TodoInput.module.css
│   │   └── TodoList/
│   │       ├── TodoList.tsx
│   │       ├── TodoList.module.css
│   │       ├── TodoItem/      # Tarea individual
│   │       │   ├── TodoItem.tsx
│   │       │   └── TodoItem.module.css
│   │       └── EditModal/     # Modal profesional
│   │           ├── EditModal.tsx
│   │           └── EditModal.module.css
│   ├── constants/
│   │   ├── taskActions.ts     # Constantes de tipos de acciones
│   │   └── validation.ts      # Reglas de validación
│   ├── hooks/
│   │   ├── useTasks.ts        # Lógica principal de tareas
│   │   └── useLocalStorage.ts # Almacenamiento persistente
│   ├── interfaces/
│   │   ├── task.interface.ts  # Tipo Task
│   │   └── filters.type.ts    # Tipos de filtros
│   ├── reducer/
│   │   └── taskReducer.ts     # Gestión de estado
│   ├── utils/
│   │   ├── taskValidation.ts  # Lógica de validación (DRY)
│   │   └── className.ts       # Helper CSS (cn)
│   ├── mock-data/
│   │   └── mock-data.ts       # Tareas iniciales
│   ├── index.css              # Estilos globales + variables CSS
│   ├── main.tsx               # Punto de entrada React
│   └── TaskApp.tsx            # Componente principal (¡30 líneas!)
├── TUTORIAL_INPUT_VALIDACIONES.md   # Guía de validación de inputs
├── TUTORIAL_MODAL_PROFESIONAL.md    # Guía de implementación de modal
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Tecnologías y Patrones

### Stack Principal
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.1.1 | Framework UI |
| TypeScript | 5.9.3 | Seguridad de tipos |
| Vite | 7.1.7 | Herramienta de build y dev server |
| CSS Modules | Nativo | Estilos con scope |

### Patrones de React Implementados
- ✅ **Custom Hooks** - Extracción de lógica (`useTasks`, `useLocalStorage`)
- ✅ **useReducer** - Gestión de estado complejo
- ✅ **Componentes Controlados** - Manejo de formularios
- ✅ **Componentes Compuestos** - Estructura de modal
- ✅ **useMemo** - Optimización de rendimiento
- ✅ **Props Drilling** - (Suficientemente simple para no necesitar Context)

### Características de TypeScript Usadas
- ✅ Definiciones de interfaces
- ✅ Tipos union
- ✅ `as const` para literales
- ✅ Reducers type-safe
- ✅ Hooks genéricos (`useLocalStorage<T>`)

### Mejores Prácticas Aplicadas
| Principio | Implementación |
|-----------|----------------|
| **DRY** | Utilidad de validación, constantes de acciones |
| **Responsabilidad Única** | Cada componente hace una cosa |
| **Seguridad de Tipos** | Cobertura completa de TypeScript |
| **Accesibilidad** | Etiquetas ARIA, navegación por teclado |
| **Rendimiento** | useMemo, CSS Modules |
| **Código Limpio** | Componente principal de 30 líneas |

---

## 🌐 Despliegue

### Desplegar en Vercel (Recomendado)

Vercel está optimizado para proyectos Vite y ofrece hosting gratuito:

```bash
# 1. Instalar Vercel CLI
pnpm add -g vercel

# 2. Construir tu proyecto
pnpm build

# 3. Desplegar
vercel

# Sigue las indicaciones:
# - ¿Configurar y desplegar? Sí
# - ¿Qué scope? Tu cuenta
# - ¿Vincular a proyecto existente? No
# - ¿Nombre del proyecto? TaskApp
# - ¿Directorio? ./
# - ¿Sobrescribir configuración? No
```

**Tu app estará en vivo en:** `https://tu-proyecto.vercel.app` 🚀

### Desplegar en Netlify

```bash
# 1. Instalar Netlify CLI
pnpm add -g netlify-cli

# 2. Construir tu proyecto
pnpm build

# 3. Desplegar
netlify deploy --prod

# Sigue las indicaciones y selecciona la carpeta 'dist'
```

### Desplegar en GitHub Pages

```bash
# 1. Instalar gh-pages
pnpm add -D gh-pages

# 2. Actualizar vite.config.ts:
export default defineConfig({
  base: '/TaskApp/', // Nombre de tu repo
  plugins: [react()]
})

# 3. Añadir a scripts en package.json:
"scripts": {
  "predeploy": "pnpm build",
  "deploy": "gh-pages -d dist"
}

# 4. Desplegar
pnpm deploy
```

**Acceder en:** `https://tuusuario.github.io/TaskApp`

### Variables de Entorno (si es necesario)

Crear archivo `.env`:
```bash
VITE_APP_NAME=TaskApp
VITE_API_URL=tu-api-url
```

Acceder en el código:
```typescript
const appName = import.meta.env.VITE_APP_NAME
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Iniciar servidor dev (http://localhost:5173)
pnpm dev --host   # Exponer a la red (testing en móvil)

# Producción
pnpm build        # Construir para producción (output a /dist)
pnpm preview      # Previsualizar build de producción localmente

# Calidad de Código
pnpm lint         # Ejecutar ESLint
pnpm lint --fix   # Auto-reparar problemas de linting

# Verificación de Tipos
pnpm tsc          # Verificar tipos de TypeScript
```

### Salida del Build

Después de `pnpm build`, obtendrás:

```
dist/
├── assets/
│   ├── index-[hash].js    # Bundle optimizado
│   └── index-[hash].css   # CSS extraído
├── index.html
└── vite.svg
```

**Tamaño del bundle:** ~50KB (gzippeado) ⚡

---

## 🎨 Guía de Estilos

### Variables CSS (Tema Global)

Definidas en `src/index.css`:

```css
:root {
  /* Colores Primarios */
  --background-color: #f2f1e6;
  --color-button-brown: #51291e;
  --color-button2: #279af1;
  
  /* Colores de Estado */
  --color-error: #ff6b6b;
  --color-error-bg: rgba(255, 107, 107, 0.05);
  
  /* Estados Interactivos */
  --color-button-brown-hover: #3d1f17;
  --color-disabled: #ccc;
  --color-text-muted: #666;
}
```

### Patrón de CSS Modules

```tsx
// Component.tsx
import s from './Component.module.css'

<div className={s.container}>
  <p className={cn(s.text, isActive && s.active)}>
</div>
```

---

## ♿ Características de Accesibilidad

### Etiquetas ARIA
```tsx
// Etiquetas conscientes del contexto
<button aria-label={`Editar tarea: ${description}`}>
  Editar
</button>

// Etiquetas conscientes del estado
<input 
  type="checkbox"
  aria-label={`Marcar como ${isCompleted ? 'pendiente' : 'completada'}`}
/>
```

### Soporte de Teclado
- ✅ `Enter` - Enviar nueva tarea
- ✅ `ESC` - Cerrar modal
- ✅ `Tab` - Navegar entre elementos
- ✅ `Espacio` - Alternar checkbox

### Manejo de Errores
```tsx
<input aria-invalid={!!error} />
<p role="alert">{error}</p>
```

---

## 🧪 Reglas de Validación

```typescript
// src/constants/validation.ts
export const TASK_VALIDATION = {
  MIN_LENGTH: 3,   // Mínimo 3 caracteres
  MAX_LENGTH: 100  // Máximo 100 caracteres
}
```

### Flujo de Validación
1. **Input** → Contador de caracteres en tiempo real
2. **Envío** → Validar longitud mín/máx
3. **Trim** → Eliminar espacios en blanco
4. **Rechazar** → Input vacío o inválido
5. **Aceptar** → Agregar a lista de tareas

---

## 📚 Recursos Adicionales

### Tutoriales Incluidos
- **`TUTORIAL_INPUT_VALIDACIONES.md`** - Componentes controlados y validación
- **`TUTORIAL_MODAL_PROFESIONAL.md`** - Patrones de modal y accesibilidad

### Ruta de Aprendizaje Seguida
1. React básico → Componentes, Props, State
2. Hooks → useState, useEffect, useReducer
3. TypeScript → Interfaces, Tipos, Genéricos
4. Custom Hooks → Extracción de lógica
5. Rendimiento → Optimización con useMemo
6. Accesibilidad → ARIA, navegación por teclado
7. Mejores Prácticas → DRY, SOLID, Código Limpio

---

## 🔮 Mejoras Futuras

Ideas para continuar el viaje de aprendizaje:

### Adiciones Fáciles
- [ ] Modo oscuro
- [ ] Búsqueda/filtrado de tareas por texto
- [ ] Ordenar por fecha de creación
- [ ] Acciones en masa (eliminar todas las completadas)

### Intermedio
- [ ] Reordenar con drag & drop (react-beautiful-dnd)
- [ ] Categorías de tareas con colores
- [ ] Fechas límite y recordatorios
- [ ] Exportar/importar JSON

### Avanzado
- [ ] Context API (eliminar props drilling)
- [ ] Optimización con React.memo
- [ ] Lista virtualizada (react-window)
- [ ] Soporte offline (Service Workers)
- [ ] Integración con backend (Supabase/Firebase)
- [ ] Tests unitarios (Vitest)

---

## 🐛 Solución de Problemas

### Problemas Comunes

**Puerto ya en uso:**
```bash
# Cambiar puerto en vite.config.ts
server: { port: 3000 }
```

**pnpm no encontrado:**
```bash
npm install -g pnpm
```

**Errores de build:**
```bash
# Limpiar caché
rm -rf node_modules .vite dist
pnpm install
pnpm build
```

---

## 📄 Licencia

Licencia MIT - ¡Libre para usar en proyectos de aprendizaje y personales!

---

## 👨‍💻 Autor

**Construido en 7 días** como un viaje de aprendizaje de React (25-31 de Octubre, 2025)

### Lo Que Este Proyecto Representa
- ✅ Transición de principiante a intermedio en React
- ✅ Comprensión de mejores prácticas modernas
- ✅ Enfoque en calidad y mantenibilidad del código
- ✅ Aplicación práctica de TypeScript
- ✅ Compromiso con la accesibilidad

---

## 🙏 Agradecimientos

- **Equipo de React** - Por React 19 y su increíble documentación
- **Equipo de Vite** - Por herramientas increíblemente rápidas
- **TypeScript** - Por hacer JavaScript mejor
- **Comunidad** - Por compartir conocimiento y mejores prácticas

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Total de Componentes** | 7 |
| **Custom Hooks** | 2 |
| **Utilidades** | 2 |
| **Líneas de Código** | ~800 |
| **Tamaño del Componente Principal** | 30 líneas |
| **Tamaño del Bundle (gzipped)** | ~50KB |
| **Cobertura de TypeScript** | 100% |
| **Puntuación de Accesibilidad** | ⭐⭐⭐⭐⭐ |
| **Tiempo de Desarrollo** | 7 días |

---

## 🌟 Historia de Estrellas

¡Si este proyecto te ayudó a aprender React, considera darle una ⭐!

---

## 📞 Soporte

¿Encontraste un bug o tienes preguntas?
- Abre un issue en GitHub
- Revisa los tutoriales en el proyecto
- Revisa los comentarios inline en el código

---

**¡Feliz Codificación! 🚀**

_Recuerda: El gran código no se escribe, se reescribe. ¡Este proyecto es prueba de ello!_
