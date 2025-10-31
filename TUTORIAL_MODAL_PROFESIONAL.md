# 🎓 Tutorial Completo: Modal Profesional con React y TypeScript

**Fecha:** 30 de Octubre, 2025  
**Objetivo:** Aprender a crear un modal profesional con validaciones, animaciones, accesibilidad y buenas prácticas

---

## 📚 CONCEPTOS QUE NECESITAS APRENDER

### 1. **¿Qué es un Modal?**

Un modal es una ventana emergente que aparece sobre el contenido principal de la página y requiere la interacción del usuario antes de continuar.

**Características de un buen modal:**
- ✅ Bloquea la interacción con el contenido de fondo
- ✅ Se puede cerrar con ESC, click fuera o botón cerrar
- ✅ El foco queda "atrapado" dentro del modal
- ✅ Tiene animaciones de entrada/salida
- ✅ Es accesible para screen readers

**Recursos:**
- [MDN - Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [W3C - Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

---

### 2. **Event Bubbling y Event Target**

Cuando haces click en un elemento, el evento "burbujea" hacia arriba en el árbol DOM.

**Conceptos clave:**
- `e.target` - El elemento donde REALMENTE hiciste click
- `e.currentTarget` - El elemento al que le asignaste el listener
- `e.stopPropagation()` - Detiene el bubbling

**Ejemplo:**
```tsx
<div onClick={handleClick}>  {/* currentTarget */}
  <button>Click me</button>   {/* target */}
</div>
```

Si haces click en el botón:
- `e.target` → botón
- `e.currentTarget` → div

**Para cerrar modal solo al hacer click en el backdrop:**
```typescript
const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  // Solo cierra si hiciste click en el backdrop, no en el contenido
  if (e.target === e.currentTarget) {
    onClose();
  }
};
```

**Recursos:**
- [JavaScript.info - Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [MDN - Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

---

### 3. **useEffect y Event Listeners**

`useEffect` ejecuta código después de que el componente se renderiza.

**Sintaxis básica:**
```typescript
useEffect(() => {
  // Código que se ejecuta después del render
  
  return () => {
    // Cleanup: se ejecuta cuando el componente se desmonta
  };
}, [dependencies]);
```

**Para agregar event listeners globales:**
```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      console.log('ESC pressed!');
    }
  };

  // Agregar el listener
  document.addEventListener('keydown', handleKeyDown);

  // Cleanup: remover el listener cuando el componente se desmonte
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);
```

**¿Por qué el cleanup es importante?**
Si no remueves los listeners, quedan en memoria y pueden causar:
- Memory leaks (fugas de memoria)
- Múltiples listeners acumulándose
- Comportamientos inesperados

**Recursos:**
- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [Overreacted - A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

---

### 4. **CSS Position: fixed, absolute y z-index**

**`position: fixed`**
- Se posiciona relativo a la ventana del navegador
- No se mueve al hacer scroll
- Ideal para modales y overlays

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Ocupa toda la pantalla */
}
```

**`position: absolute`**
- Se posiciona relativo al ancestro más cercano con `position: relative`
- Se mueve con el scroll

**`z-index`**
- Controla qué elementos están "encima" de otros
- Números más altos = más arriba
- Solo funciona con `position: relative/absolute/fixed`

```css
.backdrop {
  z-index: 1000; /* Muy arriba */
}

.navbar {
  z-index: 100; /* Abajo del modal */
}
```

**Recursos:**
- [CSS Tricks - Position](https://css-tricks.com/almanac/properties/p/position/)
- [MDN - z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

---

### 5. **CSS Flexbox para Centrar**

Flexbox es la forma más fácil de centrar elementos vertical y horizontalmente.

```css
.container {
  display: flex;
  align-items: center;      /* Centra verticalmente */
  justify-content: center;  /* Centra horizontalmente */
  height: 100vh;            /* Necesita altura definida */
}
```

**Recursos:**
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### 6. **CSS Animations con @keyframes**

Las animaciones CSS permiten transiciones suaves entre estados.

**Estructura básica:**
```css
/* 1. Definir la animación */
@keyframes nombreAnimacion {
  from {
    /* Estado inicial */
    opacity: 0;
  }
  to {
    /* Estado final */
    opacity: 1;
  }
}

/* 2. Aplicar la animación */
.elemento {
  animation: nombreAnimacion 0.3s ease-out;
}
```

**Propiedades de animation:**
- `animation-name`: Nombre del @keyframes
- `animation-duration`: Duración (0.3s)
- `animation-timing-function`: Curva (ease, ease-in, ease-out, linear)
- `animation-delay`: Retraso antes de iniciar
- `animation-iteration-count`: Cuántas veces se repite

**Timing functions:**
- `ease`: Lento al inicio, rápido en medio, lento al final
- `ease-in`: Lento al inicio
- `ease-out`: Lento al final (mejor para entrada)
- `ease-in-out`: Lento al inicio y final
- `linear`: Velocidad constante

**Recursos:**
- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Cubic Bezier Generator](https://cubic-bezier.com/)

---

### 7. **CSS Transform**

`transform` permite mover, rotar, escalar elementos sin afectar el layout.

**Propiedades comunes:**
```css
transform: translateX(100px);    /* Mover horizontalmente */
transform: translateY(-20px);    /* Mover verticalmente */
transform: scale(1.1);           /* Escalar (agrandar/achicar) */
transform: rotate(45deg);        /* Rotar */

/* Combinar múltiples transformaciones */
transform: translateY(-50%) scale(0.9);
```

**¿Por qué usar transform en lugar de top/left?**
- ✅ Mejor performance (usa GPU)
- ✅ No causa reflows
- ✅ Animaciones más suaves

**Recursos:**
- [MDN - Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS Tricks - Transform](https://css-tricks.com/almanac/properties/t/transform/)

---

### 8. **Controlled Components en React**

Un controlled component es un input cuyo valor es controlado por React state.

**Uncontrolled (❌ Evitar):**
```tsx
const inputRef = useRef<HTMLInputElement>(null);

const handleSubmit = () => {
  const value = inputRef.current?.value; // Leer del DOM
};

<input ref={inputRef} defaultValue="Hello" />
```

**Controlled (✅ Recomendado):**
```tsx
const [value, setValue] = useState("Hello");

const handleSubmit = () => {
  console.log(value); // Leer del state
};

<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

**Ventajas:**
- ✅ React tiene el control total
- ✅ Fácil validar en tiempo real
- ✅ Fácil de testear
- ✅ Fácil resetear el valor

**Recursos:**
- [React Docs - Controlled Components](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

---

### 9. **ARIA Attributes para Accesibilidad**

ARIA (Accessible Rich Internet Applications) ayuda a que tu app sea usable por personas con discapacidades.

**Atributos importantes para modales:**

**`aria-invalid`** - Indica si un campo tiene error
```tsx
<input aria-invalid={!!error} />
```

**`aria-describedby`** - Asocia el error con el input
```tsx
<input aria-describedby="error-msg" />
<p id="error-msg">Error: Invalid input</p>
```

**`aria-label`** - Describe un elemento sin texto visible
```tsx
<button aria-label="Close modal">✕</button>
```

**`role="alert"`** - Anuncia mensajes importantes
```tsx
<p role="alert">Error: Task cannot be empty</p>
```

**Recursos:**
- [MDN - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [A11y Project](https://www.a11yproject.com/)

---

### 10. **CSS Pseudo-clases Avanzadas**

**`:hover`** - Cuando el mouse está encima
```css
button:hover {
  background-color: blue;
}
```

**`:focus`** - Cuando el elemento tiene foco
```css
input:focus {
  border-color: blue;
}
```

**`:disabled`** - Cuando está deshabilitado
```css
button:disabled {
  opacity: 0.5;
}
```

**`:not()`** - Negación
```css
/* Solo hover si NO está disabled */
button:hover:not(:disabled) {
  transform: translateY(-2px);
}
```

**Selectores de atributo:**
```css
/* Selecciona inputs con aria-invalid="true" */
input[aria-invalid="true"] {
  border-color: red;
}
```

**Recursos:**
- [MDN - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

---

## 🎯 PROYECTO: "Professional Modal"

### **Descripción:**
Crear un modal de edición profesional con validaciones, animaciones, soporte para ESC, backdrop click y accesibilidad completa.

### **Requisitos:**
- ✅ React + TypeScript + Vite
- ✅ CSS Modules
- ✅ Controlled component con useState
- ✅ Validaciones en tiempo real
- ✅ Se cierra con ESC, backdrop click, o botón cerrar
- ✅ Animaciones de entrada y salida
- ✅ ARIA attributes
- ✅ Responsive

---

## 🛠️ PASO A PASO COMPLETO

### **FASE 0: Setup del Proyecto**

#### Paso 0.1: Crear proyecto con Vite
```bash
npm create vite@latest professional-modal -- --template react-ts
cd professional-modal
npm install
```

#### Paso 0.2: Estructura de carpetas
```
src/
├── components/
│   └── EditModal/
│       ├── EditModal.tsx
│       └── EditModal.module.css
├── constants/
│   └── validation.ts
├── App.tsx
├── App.css
└── main.tsx
```

---

### **FASE 1: Crear Constantes de Validación**

#### Paso 1.1: Crear `src/constants/validation.ts`

```typescript
export const TASK_VALIDATION = {
  MAX_LENGTH: 100,
  MIN_LENGTH: 3,
  PATTERN: /^[a-zA-Z0-9\s\u00C0-\u017F.,!?áéíóúÁÉÍÓÚñÑ-]+$/,
  ERROR_MESSAGES: {
    MIN_LENGTH: 'Task must be at least 3 characters',
    MAX_LENGTH: 'Task cannot exceed 100 characters',
    INVALID_CHARS: 'Task contains invalid characters',
    ONLY_SPACES: 'Task cannot be only spaces',
  }
} as const;
```

---

### **FASE 2: Crear el Componente Modal Base**

#### Paso 2.1: Crear `src/components/EditModal/EditModal.tsx`

```typescript
import { useState } from "react";
import s from "./EditModal.module.css";

interface Props {
  description: string;
  onSave: (newDescription: string) => void;
  onClose: () => void;
}

export const EditModal: React.FC<Props> = ({
  description,
  onSave,
  onClose,
}) => {
  const [value, setValue] = useState(description);

  const handleSave = () => {
    if (value.trim()) {
      onSave(value.trim());
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.modal__content}>
        <h3>Edit Task</h3>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
```

**Conceptos usados:**
- ✅ Controlled component con `useState`
- ✅ Props interface con TypeScript
- ✅ Backdrop click handling

---

### **FASE 3: CSS Base del Modal**

#### Paso 3.1: Crear `src/components/EditModal/EditModal.module.css`

```css
/* Backdrop - Fondo oscuro que cubre toda la pantalla */
.modal__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Contenido del modal */
.modal__content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

**Conceptos usados:**
- ✅ `position: fixed` para overlay
- ✅ Flexbox para centrar
- ✅ `z-index` para estar encima de todo
- ✅ `rgba()` para transparencia

---

### **FASE 4: Agregar Soporte para Tecla ESC**

#### Paso 4.1: Agregar useEffect en EditModal.tsx

```typescript
import { useState, useEffect } from "react";

export const EditModal: React.FC<Props> = ({ description, onSave, onClose }) => {
  const [value, setValue] = useState(description);

  // ✅ NUEVO: Soporte para ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Agregar listener
    document.addEventListener("keydown", handleEscape);

    // Cleanup: remover listener al desmontar
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // ... resto del código
};
```

**Conceptos usados:**
- ✅ `useEffect` para side effects
- ✅ Event listeners globales en `document`
- ✅ Cleanup function para prevenir memory leaks
- ✅ Dependencia `[onClose]` en el array de deps

---

### **FASE 5: Agregar Validaciones**

#### Paso 5.1: Importar constantes y crear función de validación

```typescript
import { useState, useEffect } from "react";
import { TASK_VALIDATION } from "../../constants/validation";
import s from "./EditModal.module.css";

export const EditModal: React.FC<Props> = ({ description, onSave, onClose }) => {
  const [value, setValue] = useState(description);
  const [error, setError] = useState<string | null>(null);

  // ... useEffect para ESC ...

  // ✅ NUEVA FUNCIÓN: Validar
  const validateTask = (text: string): string | null => {
    const trimmed = text.trim();

    if (!trimmed) {
      return TASK_VALIDATION.ERROR_MESSAGES.ONLY_SPACES;
    }

    if (trimmed.length < TASK_VALIDATION.MIN_LENGTH) {
      return TASK_VALIDATION.ERROR_MESSAGES.MIN_LENGTH;
    }

    if (trimmed.length > TASK_VALIDATION.MAX_LENGTH) {
      return TASK_VALIDATION.ERROR_MESSAGES.MAX_LENGTH;
    }

    if (!TASK_VALIDATION.PATTERN.test(trimmed)) {
      return TASK_VALIDATION.ERROR_MESSAGES.INVALID_CHARS;
    }

    return null;
  };

  const handleSave = () => {
    const validationError = validateTask(value);

    if (validationError) {
      setError(validationError);
      return;
    }

    // Si no cambió nada, solo cierra
    if (value.trim() === description) {
      onClose();
      return;
    }

    onSave(value.trim());
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Prevenir escribir más del máximo
    if (newValue.length <= TASK_VALIDATION.MAX_LENGTH) {
      setValue(newValue);
      setError(null); // Limpiar error mientras escribe
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className={s.modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.modal__content}>
        <h3>Edit Task</h3>
        
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          aria-invalid={!!error}
          aria-describedby={error ? "modal-error" : undefined}
          autoFocus
        />
        
        {error && (
          <p id="modal-error" role="alert">
            {error}
          </p>
        )}
        
        <button onClick={onClose}>Cancel</button>
        <button 
          onClick={handleSave}
          disabled={value.length < TASK_VALIDATION.MIN_LENGTH}
        >
          Save
        </button>
      </div>
    </div>
  );
};
```

**Conceptos usados:**
- ✅ Validación con RegEx
- ✅ Estado para errores
- ✅ ARIA attributes
- ✅ Enter para guardar
- ✅ `autoFocus` en el input
- ✅ Botón deshabilitado condicionalmente

---

### **FASE 6: Mejorar Estructura HTML**

#### Paso 6.1: Reorganizar el modal con header, body y footer

```typescript
return (
  <div className={s.modal__backdrop} onClick={handleBackdropClick}>
    <div className={s.modal__content}>
      
      {/* Header */}
      <div className={s.modal__header}>
        <h3 className={s.modal__title}>Edit Task</h3>
        <button
          onClick={onClose}
          className={s.btn__close}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className={s.modal__body}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={s.modal__input}
          type="text"
          placeholder="Enter task description"
          aria-invalid={!!error}
          aria-describedby={error ? "modal-error" : undefined}
          autoFocus
        />
        {error && (
          <p id="modal-error" className={s.error_message} role="alert">
            {error}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className={s.modal__footer}>
        <button onClick={onClose} className={s.btn__cancel}>
          Cancel
        </button>
        <button
          className={s.btn__save}
          onClick={handleSave}
          disabled={value.length < TASK_VALIDATION.MIN_LENGTH}
        >
          Save Changes
        </button>
      </div>

    </div>
  </div>
);
```

**Beneficios:**
- ✅ Estructura más clara y semántica
- ✅ Más fácil de estilizar
- ✅ Mejor para responsive

---

### **FASE 7: CSS Completo con Animaciones**

#### Paso 7.1: Reemplazar todo el CSS

```css
/* ===== BACKDROP ===== */
.modal__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ===== CONTENIDO ===== */
.modal__content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== HEADER ===== */
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
}

.btn__close {
  background: transparent;
  color: #718096;
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  padding: 0;
  line-height: 1;
}

.btn__close:hover {
  background-color: #f7fafc;
  color: #2d3748;
}

/* ===== BODY ===== */
.modal__body {
  padding: 1.5rem;
  flex: 1;
}

.modal__input {
  border: 2px solid #cbd5e0;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 14px;
  width: 100%;
  outline: none;
  transition: all 0.2s ease;
}

.modal__input:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.modal__input[aria-invalid="true"] {
  border-color: #ff6b6b;
  background-color: rgba(255, 107, 107, 0.05);
}

.modal__input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.error_message {
  margin: 8px 0 0 0;
  font-size: 13px;
  color: #ff6b6b;
  font-weight: 500;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== FOOTER ===== */
.modal__footer {
  display: flex;
  gap: 12px;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  background-color: #f7fafc;
}

.btn__cancel,
.btn__save {
  flex: 1;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn__cancel {
  background-color: white;
  color: #4a5568;
  border: 1px solid #cbd5e0;
}

.btn__cancel:hover {
  background-color: #f7fafc;
  border-color: #a0aec0;
}

.btn__save {
  background-color: #4299e1;
  color: white;
  border: 1px solid #4299e1;
}

.btn__save:hover:not(:disabled) {
  background-color: #3182ce;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(66, 153, 225, 0.3);
}

.btn__save:active:not(:disabled) {
  transform: translateY(0);
}

.btn__save:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #cbd5e0;
  border-color: #cbd5e0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 480px) {
  .modal__content {
    width: 95%;
    margin: 1rem;
  }

  .modal__header,
  .modal__body,
  .modal__footer {
    padding: 1rem;
  }

  .btn__cancel,
  .btn__save {
    font-size: 13px;
    padding: 8px 12px;
  }
}
```

**Animaciones explicadas:**

1. **fadeIn** (backdrop)
   - Aparece gradualmente de transparent a opaco
   - Duración: 0.2s (rápido)

2. **slideUp** (modal)
   - Sube desde abajo con fade-in
   - Duración: 0.3s
   - `transform: translateY(20px)` → mueve 20px hacia abajo inicialmente

3. **slideDown** (error)
   - Baja 4px con fade-in
   - Duración: 0.2s

---

### **FASE 8: Usar el Modal en App**

#### Paso 8.1: Actualizar `src/App.tsx`

```typescript
import { useState } from 'react';
import { EditModal } from './components/EditModal/EditModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState(
    "Learn React and TypeScript"
  );

  const handleSave = (newDescription: string) => {
    setTaskDescription(newDescription);
  };

  return (
    <div className="app">
      <h1>🎯 Professional Modal Demo</h1>
      
      <div className="task-card">
        <p><strong>Current Task:</strong></p>
        <p>{taskDescription}</p>
        <button onClick={() => setIsModalOpen(true)}>
          Edit Task
        </button>
      </div>

      {isModalOpen && (
        <EditModal
          description={taskDescription}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
```

#### Paso 8.2: Estilos básicos en `src/App.css`

```css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

h1 {
  color: #2d3748;
  margin-bottom: 32px;
  text-align: center;
}

.task-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.task-card p {
  margin-bottom: 16px;
  color: #4a5568;
}

.task-card button {
  background-color: #4299e1;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.task-card button:hover {
  background-color: #3182ce;
  transform: translateY(-1px);
}
```

---

### **FASE 9: Testing Manual**

#### Casos de prueba:

1. ✅ **Abrir modal** → Click en "Edit Task"
2. ✅ **Cerrar con X** → Click en el botón X
3. ✅ **Cerrar con ESC** → Presionar tecla Escape
4. ✅ **Cerrar con backdrop** → Click fuera del modal
5. ✅ **Escribir menos de 3 caracteres** → Botón Save deshabilitado
6. ✅ **Escribir solo espacios y guardar** → Error: "Cannot be only spaces"
7. ✅ **Escribir caracteres inválidos** → Error: "Contains invalid characters"
8. ✅ **Editar tarea válida** → Se guarda correctamente
9. ✅ **Presionar Enter** → Guarda la tarea
10. ✅ **Resize de pantalla** → Se ve bien en móvil

---

## 🎨 EXTRAS Y MEJORAS

### **Extra 1: Agregar animación de salida**

Para que el modal tenga animación al cerrarse, necesitas:

```typescript
const [isClosing, setIsClosing] = useState(false);

const handleClose = () => {
  setIsClosing(true);
  setTimeout(() => {
    onClose();
  }, 300); // Mismo tiempo que la animación
};
```

```css
.modal__backdrop.closing {
  animation: fadeOut 0.3s ease-out;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

---

### **Extra 2: Portal para el Modal**

Los modales deben renderizarse fuera del árbol DOM principal.

```bash
npm install react-dom
```

```typescript
import { createPortal } from 'react-dom';

export const EditModal: React.FC<Props> = (props) => {
  return createPortal(
    <div className={s.modal__backdrop}>
      {/* contenido */}
    </div>,
    document.body
  );
};
```

**Beneficios:**
- ✅ Evita problemas con `overflow: hidden`
- ✅ Evita problemas con `z-index`
- ✅ Mejor para accesibilidad

---

### **Extra 3: Focus Trap (Avanzado)**

Instalar librería:
```bash
npm install focus-trap-react
```

Uso:
```typescript
import FocusTrap from 'focus-trap-react';

return (
  <FocusTrap>
    <div className={s.modal__backdrop}>
      {/* contenido */}
    </div>
  </FocusTrap>
);
```

**Beneficio:** El foco no puede salir del modal (mejor accesibilidad).

---

### **Extra 4: Deshabilitar scroll del body**

Cuando el modal está abierto, deshabilita el scroll:

```typescript
useEffect(() => {
  // Guardar el overflow original
  const originalOverflow = document.body.style.overflow;
  
  // Deshabilitar scroll
  document.body.style.overflow = 'hidden';
  
  // Cleanup: restaurar scroll
  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, []);
```

---

### **Extra 5: Click en contenido no cierra el modal**

Ya implementado con:
```typescript
const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
};
```

Pero asegúrate de que el evento NO se propague desde el contenido:

```tsx
<div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
```

---

## 📊 CHECKLIST FINAL

Al completar este proyecto, deberías poder:

- [ ] Crear un modal con `position: fixed`
- [ ] Centrar elementos con Flexbox
- [ ] Manejar backdrop clicks correctamente
- [ ] Agregar event listeners con useEffect
- [ ] Limpiar event listeners (cleanup)
- [ ] Crear animaciones CSS con @keyframes
- [ ] Usar transform para animaciones suaves
- [ ] Implementar controlled components
- [ ] Validar inputs en tiempo real
- [ ] Usar ARIA attributes
- [ ] Manejar teclas especiales (ESC, Enter)
- [ ] Deshabilitar botones condicionalmente
- [ ] Aplicar estilos con pseudo-clases avanzadas
- [ ] Hacer componentes responsive

---

## 🚀 DESAFÍOS ADICIONALES

### Desafío 1: Modal de confirmación
Crea un modal de confirmación (¿Estás seguro?) con dos botones.

### Desafío 2: Modal con múltiples pasos
Crea un modal wizard con "Next" y "Previous".

### Desafío 3: Modal de imagen
Modal que muestra una imagen grande y permite navegar entre imágenes.

### Desafío 4: Modal con formulario completo
Multiple inputs, select, textarea, checkboxes.

### Desafío 5: Toast notifications
Notificaciones que aparecen temporalmente en una esquina.

---

## 📖 RECURSOS ADICIONALES

### Librerías de modales populares:
- [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog) - Accesibilidad perfecta
- [React Modal](https://reactcommunity.org/react-modal/) - Popular y simple
- [Headless UI](https://headlessui.com/) - De TailwindCSS

### Herramientas:
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Inspiración:
- [Dribbble - Modal Designs](https://dribbble.com/search/modal)
- [UI Design Daily](https://www.uidesigndaily.com/)

---

## 💡 TIPS PARA CUANDO LO HAGAS

1. **Escribe el código línea por línea** - No copies y pegues todo
2. **Prueba cada fase** - Antes de pasar a la siguiente
3. **Experimenta con valores** - Cambia tiempos, colores, tamaños
4. **Usa console.log** - Para entender el flujo
5. **Prueba en diferentes navegadores** - Chrome, Firefox, Safari
6. **Testea accesibilidad** - Usa solo el teclado (Tab, Enter, ESC)
7. **Pide feedback** - Muestra a otros developers

---

## 🎯 CONCEPTOS CLAVE APRENDIDOS

1. **Event Bubbling** - `e.target` vs `e.currentTarget`
2. **useEffect** - Side effects y cleanup
3. **Event Listeners** - addEventListener y removeEventListener
4. **CSS Position** - fixed, absolute, relative
5. **CSS Flexbox** - align-items, justify-content
6. **CSS Animations** - @keyframes y animation
7. **CSS Transform** - translateY, scale
8. **Controlled Components** - useState para inputs
9. **ARIA Attributes** - Accesibilidad web
10. **Pseudo-clases** - :hover, :not(), :disabled, [attr]

---

**¡Buena suerte con tu proyecto! 🎉**

Cuando lo hagas, experimentá, rompé cosas, y aprendé del proceso.

---

**Creado el:** 30 de Octubre, 2025  
**Autor:** GitHub Copilot CLI  
**Proyecto base:** TaskApp Professional Modal
