# 📋 Plan de Mejoras - TaskApp Project

**Fecha de inicio:** 29 de Octubre, 2025  
**Objetivo:** Refactorizar y mejorar el proyecto TaskApp siguiendo buenas prácticas de Frontend Senior

---

## 📊 ESTADO ACTUAL DEL PROYECTO

### Tecnologías Utilizadas:
- React 19.1.1 + TypeScript
- Vite 7.1.7
- CSS Modules
- useReducer para manejo de estado

### Estructura de Carpetas:
```
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── TabsList/
│   ├── TodoInput/
│   └── TodoList/
│       ├── TodoItem/
│       └── EditModal/
├── hooks/ (vacío actualmente)
├── interfaces/
│   └── task.interface.ts
├── mock-data/
│   └── mock-data.ts
├── reducer/
│   └── taskReducer.ts
├── utils/
│   └── className.ts
├── index.css
├── main.tsx
└── TaskApp.tsx
```

---

## ✅ COSAS QUE SE HICIERON BIEN

### Arquitectura y Estructura:
1. ✅ Excelente estructura de carpetas - Separación clara: components, hooks, interfaces, reducer, utils
2. ✅ CSS Modules - Evita conflictos de estilos
3. ✅ TypeScript correctamente configurado - Interfaces bien definidas y tipado en componentes
4. ✅ useReducer para estado complejo - Buena elección sobre useState para múltiples tareas
5. ✅ Componentes atómicos - TodoItem, EditModal separados correctamente
6. ✅ Utility function (cn) - Helper para concatenar clases CSS
7. ✅ Variables CSS - Paleta de colores centralizada en :root
8. ✅ Props interface - Cada componente tiene sus Props bien tipadas
9. ✅ RefObject correcto - Buen uso de useRef para inputs
10. ✅ Reducer con acciones tipadas - Action types bien definidos

---

## 🚀 MEJORAS A IMPLEMENTAR

### A. FUNCIONALIDAD Y LÓGICA
1. ❌ **TabsList no funciona** - Los tabs están hardcodeados, no filtran las tareas ⬅️ **EMPEZAMOS POR AQUÍ**
2. ❌ **Sin persistencia** - No hay localStorage, se pierden datos al recargar
3. ❌ **Alert en modal** - Usar toast/feedback visual en lugar de alert()
4. ❌ **Modal cierra al hacer clic en el contenido** - Solo debería cerrar con backdrop
5. ❌ **No hay validación de duplicados** - Se pueden crear tareas idénticas
6. ❌ **Input no tiene maxLength** - Usuario puede escribir texto infinito

### B. COMPONENTES Y ARQUITECTURA
7. ❌ **Lógica en TaskApp** - Las funciones addTask, editTask deberían estar en un hook custom
8. ❌ **TodoItem tiene demasiadas responsabilidades** - Modal debería manejarse fuera
9. ❌ **Props drilling** - Pasas funciones por 2 niveles (TaskApp → TodoList → TodoItem)
10. ❌ **Falta hook useLocalStorage** - Para persistir datos automáticamente
11. ❌ **Falta context** - Para evitar prop drilling y compartir estado global
12. ❌ **TodoInput podría ser más reutilizable** - Recibe ref en lugar de controlar su propio estado

### C. CSS Y ESTILOS
13. ⚠️ **Inline styles** - `style={isCompleted ? {...} : {}}` debería ser clase CSS
14. ⚠️ **Colores hardcodeados** - Algunos colores no usan variables CSS (salmon, orangered, royalblue)
15. ⚠️ **BEM inconsistente** - Mezclas de nomenclatura (todoitem_actions vs container__input)
16. ⚠️ **Magic numbers** - Valores como 500px, 8px sin tokens/variables
17. ⚠️ **CSS comentado** - Código comentado en index.css
18. ⚠️ **Falta responsive** - No hay media queries, solo max-width fijos
19. ⚠️ **display: inline-flexbox** - No existe, debería ser inline-flex

### D. ACCESIBILIDAD (a11y)
20. ❌ **Botones sin aria-label** - Botones "Editar", "Eliminar" sin contexto para screen readers
21. ❌ **Modal sin trap focus** - El foco debería quedar dentro del modal
22. ❌ **Sin tecla Escape** - Modal no cierra con ESC
23. ❌ **Checkbox sin label** - Checkbox sin label asociado (accesibilidad)
24. ❌ **Contraste de colores** - Algunos textos pueden no cumplir WCAG AA

### E. PERFORMANCE
25. ⚠️ **Re-renders innecesarios** - No usas React.memo en componentes que no cambian
26. ⚠️ **Callbacks sin useCallback** - onCheckedTask, onDeletedTask recreados cada render
27. ⚠️ **mockdata se reinicia** - Genera nuevos UUIDs cada vez que recarga

### F. BUENAS PRÁCTICAS
28. ⚠️ **Typo en función** - `handleToogleModal` → debería ser `handleToggleModal`
29. ⚠️ **Nombres mixtos** - TodoInput vs TaskInput (inconsistencia)
30. ⚠️ **Sin manejo de errores** - No hay try-catch o error boundaries
31. ⚠️ **Magic strings** - Los tipos del reducer deberían ser constantes
32. ⚠️ **Sin tests** - No hay tests unitarios ni de integración
33. ⚠️ **README vacío/básico** - Sin documentación del proyecto

### G. ESTRUCTURA DE ARCHIVOS
34. ⚠️ **hooks folder vacío** - Deberías tener al menos useTasks.ts
35. ⚠️ **constants folder faltante** - Para action types, colores, etc.
36. ⚠️ **types vs interfaces** - Podrías unificar en una carpeta "types"

---

## 📋 PRIORIDADES (De mayor a menor impacto)

### Nivel 1 - Crítico (Funcionalidad básica)
- ✅ **EN PROCESO:** Implementar funcionalidad de TabsList (filtrar tareas)
- Agregar persistencia con localStorage
- Crear hook `useTasks` para manejar lógica del reducer
- Extraer constantes para action types

### Nivel 2 - Importante (Arquitectura)
- Implementar Context API para evitar prop drilling
- Crear hook `useLocalStorage` reutilizable
- Refactorizar TodoItem (separar lógica del modal)
- Agregar validaciones de input

### Nivel 3 - Mejoras (UX/UI)
- Reemplazar `alert()` con sistema de notificaciones
- Agregar animaciones (framer-motion o CSS transitions)
- Hacer responsive design con media queries
- Mover inline styles a CSS modules

### Nivel 4 - Profesional (a11y & Performance)
- Agregar aria-labels y roles ARIA
- Implementar trap focus en modal
- Agregar soporte para tecla ESC
- Optimizar con React.memo y useCallback

### Nivel 5 - Avanzado (Testing & Docs)
- Escribir tests con Vitest/Jest
- Documentar en README
- Agregar Storybook para componentes
- Implementar error boundaries

---

## 🔄 PROGRESO ACTUAL

### ✅ COMPLETADO:
- Análisis completo del código
- Identificación de mejoras
- Documentación de buenas prácticas encontradas

### 🚧 EN PROCESO:
#### **1. Implementar funcionalidad de TabsList con contador**

**Objetivos:**
- [x] Crear tipos para filtros (FilterType)
- [ ] Agregar estado para filtro activo en TaskApp
- [ ] Crear lógica de filtrado de tareas
- [ ] Implementar contador de tareas (all, completed, pending)
- [ ] Actualizar TabsList para recibir y usar las props
- [ ] Conectar todo en TaskApp

**Pasos técnicos realizados:**

1. **Crear tipo FilterType:**
```typescript
// src/types/filters.ts
export type FilterType = 'all' | 'completed' | 'pending';

export interface TaskCounts {
  all: number;
  completed: number;
  pending: number;
}
```

2. **Agregar estado en TaskApp:**
```typescript
const [filterType, setFilterType] = useState<FilterType>('all');
```

3. **Lógica de filtrado (3 opciones propuestas):**

**Opción A - Simple:**
```typescript
const getFilteredTasks = (): Task[] => {
  switch (filterType) {
    case 'all':
      return state;
    case 'completed':
      return state.filter(task => task.isCompleted);
    case 'pending':
      return state.filter(task => !task.isCompleted);
    default:
      return state;
  }
};
```

**Opción B - Con useMemo (RECOMENDADA):**
```typescript
const taskCounts = useMemo(() => ({
  all: state.length,
  completed: state.filter(task => task.isCompleted).length,
  pending: state.filter(task => !task.isCompleted).length
}), [state]);
```

**Opción C - Con reduce (Más eficiente):**
```typescript
const taskCounts = useMemo(() => {
  return state.reduce(
    (acc, task) => {
      acc.all++;
      if (task.isCompleted) {
        acc.completed++;
      } else {
        acc.pending++;
      }
      return acc;
    },
    { all: 0, completed: 0, pending: 0 }
  );
}, [state]);
```

4. **Actualizar TabsList.tsx:**
```typescript
interface Props {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: TaskCounts;
}

export const TabsList: React.FC<Props> = ({ 
  currentFilter, 
  onFilterChange,
  taskCounts 
}) => {
  return (
    <div className={s.tabslist}>
      <button 
        className={cn(s.tab, currentFilter === 'all' && s.tab__selected)}
        onClick={() => onFilterChange('all')}
      >
        All tasks ({taskCounts.all})
      </button>
      <button 
        className={cn(s.tab, currentFilter === 'completed' && s.tab__selected)}
        onClick={() => onFilterChange('completed')}
      >
        Completed ({taskCounts.completed})
      </button>
      <button 
        className={cn(s.tab, currentFilter === 'pending' && s.tab__selected)}
        onClick={() => onFilterChange('pending')}
      >
        Pending ({taskCounts.pending})
      </button>
    </div>
  );
};
```

5. **Conectar en TaskApp:**
```typescript
return (
  <>
    <Navbar />
    <TaskInput taskRef={inputRef} onAddTask={addTask} />
    <TabsList 
      currentFilter={filterType}
      onFilterChange={setFilterType}
      taskCounts={taskCounts}
    />
    <TodoList
      tasks={filteredTasks} // Tareas filtradas
      onCheckedTask={completedTask}
      onDeletedTask={deleteTask}
      onEditTask={editTask}
    />
  </>
);
```

6. **BONUS - Mejorar CSS del contador:**
```css
.tab {
  padding: 6px 0;
  font-size: 14px;
  color: #51291e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.tab__count {
  font-weight: 600;
  background-color: rgba(81, 41, 30, 0.1);
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 12px;
}

.tab__selected .tab__count {
  background-color: rgba(39, 154, 241, 0.3);
}
```

**Estado actual:** Usuario está implementando el contador de tareas.

---

## 📝 NOTAS Y DECISIONES

### Decisiones técnicas a tomar:
- [ ] ¿Usar type o enum para FilterType?
- [ ] ¿Qué opción de filtrado usar? (A, B o C)
- [ ] ¿Agregar estilos bonus para los contadores?
- [ ] ¿Crear carpeta types/ separada o usar interfaces/?

### Aprendizajes clave:
- Uso de `useMemo` para optimizar cálculos costosos
- Diferencia entre `filter` (múltiples pasadas) vs `reduce` (una pasada)
- Patrón de "controlled components" vs "uncontrolled components"
- Uso de utility function `cn()` para clases condicionales

---

## 🎯 PRÓXIMOS PASOS (Sesión de mañana)

1. **Verificar implementación de TabsList con contador**
   - Revisar código implementado
   - Probar funcionamiento
   - Dar feedback

2. **Siguiente mejora: LocalStorage (Nivel 1)**
   - Crear hook `useLocalStorage`
   - Persistir tareas automáticamente
   - Cargar tareas al iniciar

3. **Después: Crear hook personalizado `useTasks`**
   - Extraer lógica del reducer de TaskApp
   - Centralizar todas las funciones de tareas
   - Hacer el código más limpio y testeable

---

## 📚 RECURSOS Y REFERENCIAS

### Conceptos clave:
- **CSS Modules:** Scoped styles para evitar conflictos
- **useReducer:** Manejo de estado complejo con acciones tipadas
- **TypeScript interfaces:** Definición de contratos de datos
- **Custom hooks:** Reutilización de lógica
- **useMemo:** Optimización de cálculos costosos

### Patrones utilizados:
- Component composition
- Props drilling (a mejorar con Context)
- Controlled vs Uncontrolled components
- Action/Reducer pattern

---

## 🔖 RECORDATORIOS

- El usuario quiere aprender haciendo, NO que yo haga los cambios
- Dar ejemplos claros y explicaciones paso a paso
- Ofrecer múltiples opciones cuando sea posible
- Hacer preguntas para que el usuario tome decisiones
- Dar feedback sobre el código que implemente

---

**Última actualización:** 29 de Octubre, 2025  
**Próxima sesión:** Continuar con implementación de mejoras según prioridades establecidas
