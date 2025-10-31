# 🎓 Tutorial Completo: Input con Validaciones y Animaciones

**Fecha:** 29 de Octubre, 2025  
**Objetivo:** Aprender a crear un input profesional con validaciones en tiempo real, animaciones y accesibilidad

---

## 📚 CONCEPTOS QUE NECESITAS APRENDER

### 1. **React - Controlled Components**
- ¿Qué es un controlled component?
- Diferencia entre controlled vs uncontrolled components
- Uso de `useState` para manejar el valor del input
- Evento `onChange` y cómo capturar el valor

**Recursos:**
- [React Docs - Controlled Components](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
- [FreeCodeCamp - Controlled vs Uncontrolled](https://www.freecodecamp.org/news/controlled-vs-uncontrolled-components-in-react/)

---

### 2. **TypeScript - Tipos y Eventos**
- Tipar eventos: `React.ChangeEvent<HTMLInputElement>`
- Tipar eventos de teclado: `React.KeyboardEvent<HTMLInputElement>`
- Crear constantes con `as const`
- Union types: `string | null`

**Recursos:**
- [TypeScript Handbook - React Event Types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)
- [Total TypeScript - React Events](https://www.totaltypescript.com/tutorials/react-with-typescript)

---

### 3. **Validaciones con RegEx (Expresiones Regulares)**
- ¿Qué son las expresiones regulares?
- Patrones básicos: `^`, `$`, `+`, `*`, `[]`
- Método `.test()` para validar strings
- Caracteres especiales y unicode: `\u00C0-\u017F` (acentos)

**Recursos:**
- [RegExr - Herramienta visual](https://regexr.com/)
- [MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [Regex101 - Testing playground](https://regex101.com/)

**Pattern usado en el proyecto:**
```typescript
/^[a-zA-Z0-9\s\u00C0-\u017F.,!?áéíóúÁÉÍÓÚñÑ-]+$/
```
- `^` = Inicio de string
- `[...]` = Conjunto de caracteres permitidos
- `a-zA-Z` = Letras minúsculas y mayúsculas
- `0-9` = Números
- `\s` = Espacios en blanco
- `\u00C0-\u017F` = Acentos y caracteres especiales latinos
- `.,!?` = Puntuación básica
- `+` = Uno o más caracteres
- `$` = Fin de string

---

### 4. **CSS - Flexbox Layout**
- `display: flex` y sus propiedades
- `flex: 1` vs `flex-grow: 1`
- `align-items: stretch` para altura uniforme
- `justify-content` para alineación horizontal

**Recursos:**
- [Flexbox Froggy - Juego interactivo](https://flexboxfroggy.com/)
- [CSS Tricks - Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### 5. **CSS - Animaciones y Transiciones**
- `@keyframes` para animaciones complejas
- `animation` vs `transition`
- Propiedades animables: `transform`, `opacity`
- `ease-out`, `ease-in`, `ease-in-out`
- `transform: translateY()` para movimiento vertical

**Recursos:**
- [MDN - Using CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Animista - Generador de animaciones](https://animista.net/)

**Animación del proyecto:**
```css
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
```

---

### 6. **CSS - Position y z-index**
- `position: relative` vs `absolute`
- Posicionamiento con `top`, `bottom`, `left`, `right`
- `transform: translateY(-50%)` para centrar verticalmente
- `pointer-events: none` para elementos no interactivos

**Recursos:**
- [MDN - Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS Tricks - Absolute Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

---

### 7. **Accesibilidad (a11y) - ARIA Attributes**
- `aria-invalid` - Indica que el input tiene error
- `aria-describedby` - Asocia el error con el input
- `role="alert"` - Notifica a screen readers sobre mensajes importantes
- Por qué importa la accesibilidad web

**Recursos:**
- [MDN - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WebAIM - WCAG Checklist](https://webaim.org/standards/wcag/checklist)
- [A11y Project](https://www.a11yproject.com/)

**Atributos usados:**
```tsx
<input
  aria-invalid={!!error}
  aria-describedby={error ? "input-error" : undefined}
/>
<p id="input-error" role="alert">{error}</p>
```

---

### 8. **CSS Modules**
- ¿Qué son y por qué usarlos?
- Sintaxis: `import s from './styles.module.css'`
- Uso: `className={s.container}`
- Ventaja: Scope local automático

**Recursos:**
- [CSS Modules GitHub](https://github.com/css-modules/css-modules)
- [Vite - CSS Modules](https://vitejs.dev/guide/features.html#css-modules)

---

### 9. **React - Conditional Rendering**
- Operador ternario: `condition ? true : false`
- Short-circuit con `&&`: `condition && <Component />`
- Renderizado condicional de clases CSS

**Recursos:**
- [React Docs - Conditional Rendering](https://react.dev/learn/conditional-rendering)

---

### 10. **UX - Feedback Visual y Estados**
- Estados de un input: normal, focus, disabled, error
- Feedback inmediato vs validación al submit
- Colores para indicar error (rojo) y éxito (verde)
- Transiciones suaves para mejor UX

**Recursos:**
- [Nielsen Norman Group - Error Messages](https://www.nngroup.com/articles/error-message-guidelines/)
- [Material Design - Text Fields](https://m3.material.io/components/text-fields/overview)

---

## 🎯 PROYECTO MINI: "Super Input Validator"

### **Descripción:**
Crear un input de React con validaciones en tiempo real, animaciones de error, contador de caracteres y accesibilidad completa.

### **Requisitos:**
- ✅ React + TypeScript + Vite
- ✅ CSS Modules
- ✅ Validaciones: min length, max length, caracteres permitidos
- ✅ Animaciones de entrada/salida de errores
- ✅ Contador de caracteres que aparece cerca del límite
- ✅ Botón deshabilitado si no cumple validaciones
- ✅ ARIA attributes para accesibilidad
- ✅ Estados visuales: normal, focus, error

---

## 🛠️ PASO A PASO COMPLETO

### **FASE 0: Setup del Proyecto**

#### Paso 0.1: Crear proyecto con Vite
```bash
npm create vite@latest super-input-validator -- --template react-ts
cd super-input-validator
npm install
```

#### Paso 0.2: Estructura de carpetas
```
src/
├── components/
│   └── ValidatedInput/
│       ├── ValidatedInput.tsx
│       └── ValidatedInput.module.css
├── constants/
│   └── validation.ts
├── App.tsx
├── App.css
└── main.tsx
```

---

### **FASE 1: Crear las Constantes de Validación**

#### Paso 1.1: Crear archivo `src/constants/validation.ts`
```typescript
export const INPUT_VALIDATION = {
  MAX_LENGTH: 100,
  MIN_LENGTH: 3,
  PATTERN: /^[a-zA-Z0-9\s\u00C0-\u017F.,!?áéíóúÁÉÍÓÚñÑ-]+$/,
  ERROR_MESSAGES: {
    MIN_LENGTH: 'Must be at least 3 characters',
    MAX_LENGTH: 'Cannot exceed 100 characters',
    INVALID_CHARS: 'Contains invalid characters',
    ONLY_SPACES: 'Cannot be only spaces',
  }
} as const;
```

**¿Por qué?**
- Centraliza valores mágicos
- Fácil de modificar
- `as const` previene modificaciones accidentales

---

### **FASE 2: Crear el Componente Base**

#### Paso 2.1: Crear `src/components/ValidatedInput/ValidatedInput.tsx`

```typescript
import { useState } from "react";
import s from "./ValidatedInput.module.css";

interface Props {
  onSubmit: (value: string) => void;
  placeholder?: string;
}

export const ValidatedInput: React.FC<Props> = ({ 
  onSubmit, 
  placeholder = "Enter text..." 
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={s.container}>
      <div className={s.input_group}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={s.input}
          type="text"
          placeholder={placeholder}
        />
        <button onClick={handleSubmit} className={s.button}>
          Submit
        </button>
      </div>
    </div>
  );
};
```

**Conceptos usados:**
- ✅ Controlled component con `useState`
- ✅ Event typing con TypeScript
- ✅ Props interface
- ✅ Optional props con `?` y default value

---

### **FASE 3: Estilos Base del Input**

#### Paso 3.1: Crear `src/components/ValidatedInput/ValidatedInput.module.css`

```css
.container {
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
}

.input_group {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.input {
  border: 2px solid #cbd5e0;
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  padding: 12px 16px;
  flex: 1;
  outline: none;
  transition: all 0.2s ease;
}

.input:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 1px #4299e1;
}

.button {
  background-color: #4299e1;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #4299e1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: #3182ce;
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}
```

**Conceptos usados:**
- ✅ Flexbox para layout
- ✅ `flex: 1` para que input ocupe espacio disponible
- ✅ Transiciones suaves
- ✅ Estados hover y active
- ✅ Border radius para esquinas redondeadas

---

### **FASE 4: Agregar Validaciones**

#### Paso 4.1: Importar constantes y crear función de validación

Actualiza `ValidatedInput.tsx`:

```typescript
import { useState } from "react";
import { INPUT_VALIDATION } from "../../constants/validation";
import s from "./ValidatedInput.module.css";

// ... Props interface ...

export const ValidatedInput: React.FC<Props> = ({ onSubmit, placeholder = "Enter text..." }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  // NUEVA FUNCIÓN: Validar el input
  const validateInput = (text: string): string | null => {
    const trimmed = text.trim();
    
    // Validación 1: Solo espacios
    if (!trimmed) {
      return INPUT_VALIDATION.ERROR_MESSAGES.ONLY_SPACES;
    }
    
    // Validación 2: Longitud mínima
    if (trimmed.length < INPUT_VALIDATION.MIN_LENGTH) {
      return INPUT_VALIDATION.ERROR_MESSAGES.MIN_LENGTH;
    }
    
    // Validación 3: Longitud máxima
    if (trimmed.length > INPUT_VALIDATION.MAX_LENGTH) {
      return INPUT_VALIDATION.ERROR_MESSAGES.MAX_LENGTH;
    }
    
    // Validación 4: Caracteres permitidos (RegEx)
    if (!INPUT_VALIDATION.PATTERN.test(trimmed)) {
      return INPUT_VALIDATION.ERROR_MESSAGES.INVALID_CHARS;
    }
    
    return null; // Sin errores
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Prevenir escribir más del máximo
    if (newValue.length <= INPUT_VALIDATION.MAX_LENGTH) {
      setValue(newValue);
      setError(null); // Limpiar error mientras escribe
    }
  };

  const handleSubmit = () => {
    const validationError = validateInput(value);
    
    if (validationError) {
      setError(validationError);
      return;
    }
    
    onSubmit(value.trim());
    setValue("");
    setError(null);
  };

  // ... handleKeyDown sin cambios ...

  return (
    <div className={s.container}>
      <div className={s.input_group}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={s.input}
          type="text"
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? "input-error" : undefined}
        />
        <button 
          onClick={handleSubmit} 
          className={s.button}
          disabled={value.length < INPUT_VALIDATION.MIN_LENGTH}
        >
          Submit
        </button>
      </div>
      
      {error && (
        <p id="input-error" className={s.error_message} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
```

**Conceptos usados:**
- ✅ Estado para errores: `useState<string | null>(null)`
- ✅ Función de validación que retorna `string | null`
- ✅ Validaciones en cadena
- ✅ RegEx con `.test()`
- ✅ ARIA attributes: `aria-invalid`, `aria-describedby`
- ✅ `role="alert"` para accesibilidad
- ✅ Botón deshabilitado con `disabled`

---

### **FASE 5: Estilos de Error y Animación**

#### Paso 5.1: Agregar estilos de error en `ValidatedInput.module.css`

```css
/* Agregar al final del archivo */

.input[aria-invalid="true"] {
  border-color: #f56565;
  background-color: rgba(245, 101, 101, 0.05);
}

.input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 1px #f56565;
}

.error_message {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #f56565;
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

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #a0aec0;
  border-color: #a0aec0;
}

.button:disabled:hover {
  transform: none;
}
```

**Conceptos usados:**
- ✅ Selector de atributo: `[aria-invalid="true"]`
- ✅ Pseudo-clase `:disabled`
- ✅ `@keyframes` para animación
- ✅ `animation` con duración y timing-function
- ✅ `transform: translateY()` para movimiento
- ✅ `opacity` para fade-in

---

### **FASE 6: Contador de Caracteres**

#### Paso 6.1: Agregar lógica del contador en `ValidatedInput.tsx`

```typescript
export const ValidatedInput: React.FC<Props> = ({ onSubmit, placeholder = "Enter text..." }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  // ... funciones de validación ...

  // NUEVO: Calcular caracteres restantes
  const remainingChars = INPUT_VALIDATION.MAX_LENGTH - value.length;
  const isNearLimit = remainingChars <= 20;

  return (
    <div className={s.container}>
      <div className={s.input_group}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={s.input}
          type="text"
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? "input-error" : undefined}
        />
        
        {/* NUEVO: Contador condicional */}
        {isNearLimit && (
          <span className={s.char_counter}>
            {remainingChars} left
          </span>
        )}
        
        <button 
          onClick={handleSubmit} 
          className={s.button}
          disabled={value.length < INPUT_VALIDATION.MIN_LENGTH}
        >
          Submit
        </button>
      </div>
      
      {error && (
        <p id="input-error" className={s.error_message} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
```

#### Paso 6.2: Estilos del contador en `ValidatedInput.module.css`

```css
/* Actualizar .input_group */
.input_group {
  display: flex;
  align-items: stretch;
  position: relative; /* AÑADIR ESTO */
  width: 100%;
}

/* Agregar al final */
.char_counter {
  position: absolute;
  right: 110px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #f56565;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 4px 8px;
  border-radius: 4px;
  pointer-events: none;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}
```

**Conceptos usados:**
- ✅ Renderizado condicional: `{isNearLimit && <span />}`
- ✅ `position: absolute` con `position: relative` en padre
- ✅ `transform: translateY(-50%)` para centrar verticalmente
- ✅ `pointer-events: none` para que no bloquee clicks
- ✅ Animación `fadeIn` con scale

---

### **FASE 7: Usar el Componente en App**

#### Paso 7.1: Actualizar `src/App.tsx`

```typescript
import { useState } from 'react';
import { ValidatedInput } from './components/ValidatedInput/ValidatedInput';
import './App.css';

function App() {
  const [submissions, setSubmissions] = useState<string[]>([]);

  const handleSubmit = (value: string) => {
    setSubmissions(prev => [...prev, value]);
  };

  return (
    <div className="app">
      <h1>🎯 Super Input Validator</h1>
      <p>Try entering text with different validations!</p>
      
      <ValidatedInput 
        onSubmit={handleSubmit}
        placeholder="Type something awesome..."
      />

      {submissions.length > 0 && (
        <div className="submissions">
          <h2>Submitted values:</h2>
          <ul>
            {submissions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
```

#### Paso 7.2: Estilos básicos en `src/App.css`

```css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

h1 {
  color: #2d3748;
  margin-bottom: 8px;
}

p {
  color: #718096;
  margin-bottom: 32px;
}

.submissions {
  margin-top: 40px;
  padding: 20px;
  background-color: #f7fafc;
  border-radius: 8px;
}

.submissions h2 {
  font-size: 18px;
  color: #2d3748;
  margin-bottom: 12px;
}

.submissions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.submissions li {
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: white;
  border-left: 3px solid #4299e1;
  border-radius: 4px;
  color: #2d3748;
}
```

---

### **FASE 8: Testing Manual**

#### Casos de prueba:

1. ✅ **Escribir menos de 3 caracteres** → Botón deshabilitado
2. ✅ **Escribir "ab" y presionar Submit** → Error: "Must be at least 3 characters"
3. ✅ **Escribir "   " (espacios)** → Error: "Cannot be only spaces"
4. ✅ **Escribir caracteres especiales: "@#$%"** → Error: "Contains invalid characters"
5. ✅ **Escribir 80 caracteres** → Aparece contador "20 left"
6. ✅ **Intentar escribir más de 100** → No permite
7. ✅ **Escribir "Hello World" y Submit** → Se agrega a la lista, input se limpia
8. ✅ **Presionar Enter en vez de click** → Funciona igual
9. ✅ **Escribir con acentos: "Hola José"** → Funciona correctamente

---

## 🎨 BONUS: Mejoras Adicionales (Desafíos)

### Desafío 1: Agregar modo oscuro
```css
@media (prefers-color-scheme: dark) {
  .input {
    background-color: #2d3748;
    color: white;
    border-color: #4a5568;
  }
}
```

### Desafío 2: Mostrar checkmark cuando es válido
```typescript
const isValid = value.trim().length >= INPUT_VALIDATION.MIN_LENGTH && 
                validateInput(value) === null;

{isValid && <span className={s.check}>✓</span>}
```

### Desafío 3: Agregar sonido al error
```typescript
const errorSound = new Audio('/error.mp3');

const handleSubmit = () => {
  const validationError = validateInput(value);
  
  if (validationError) {
    setError(validationError);
    errorSound.play();
    return;
  }
  // ...
};
```

### Desafío 4: Hacer responsive
```css
@media (max-width: 500px) {
  .input_group {
    flex-direction: column;
  }
  
  .input {
    border-right: 2px solid #cbd5e0;
    border-radius: 8px 8px 0 0;
  }
  
  .button {
    border-radius: 0 0 8px 8px;
  }
}
```

---

## 📊 CHECKLIST FINAL

Al completar este proyecto, deberías poder:

- [ ] Crear un controlled component en React
- [ ] Tipar eventos y props con TypeScript
- [ ] Validar inputs con múltiples reglas
- [ ] Usar expresiones regulares básicas
- [ ] Crear animaciones CSS con @keyframes
- [ ] Usar flexbox para layouts
- [ ] Implementar ARIA attributes
- [ ] Manejar estados visuales (error, disabled, focus)
- [ ] Usar CSS Modules
- [ ] Renderizado condicional en React
- [ ] Usar position absolute/relative
- [ ] Crear transiciones suaves

---

## 🚀 PRÓXIMOS PASOS

Después de dominar este proyecto, puedes:

1. **Crear variantes del input:**
   - Input de email con validación específica
   - Input de contraseña con medidor de fuerza
   - Input numérico con incrementadores
   - Textarea con las mismas validaciones

2. **Agregar más features:**
   - Debounce en validaciones
   - Validación asíncrona (verificar si username existe)
   - Sugerencias automáticas (autocomplete)
   - Copiar/pegar con validación

3. **Mejorar accesibilidad:**
   - Navegación con Tab
   - Shortcut con Ctrl+Enter
   - Anunciar errores a screen readers
   - High contrast mode

4. **Crear una librería:**
   - Publicar en npm
   - Documentar con Storybook
   - Escribir tests con Vitest
   - Agregar más tipos de validación

---

## 📖 RECURSOS ADICIONALES

### Herramientas útiles:
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Can I Use](https://caniuse.com/)

### Inspiración:
- [Dribbble - Input Designs](https://dribbble.com/search/input-field)
- [CodePen - Input Examples](https://codepen.io/search/pens?q=input+validation)

### Communities:
- [React Discord](https://discord.gg/react)
- [FrontendMentor](https://www.frontendmentor.io/)
- [Dev.to](https://dev.to/)

---

## 💡 TIPS PARA CUANDO LO HAGAS

1. **No copies y pegues todo de una vez** - Escribe línea por línea
2. **Experimenta con los valores** - Cambia colores, tiempos, tamaños
3. **Rompe cosas a propósito** - Para entender cómo funciona
4. **Usa console.log()** - Para ver qué valores tienen las variables
5. **Comenta tu código** - Explica qué hace cada parte
6. **Haz commits frecuentes** - Para poder volver atrás si algo falla
7. **Testea en diferentes navegadores** - Chrome, Firefox, Safari
8. **Pide feedback** - Muéstralo a otros developers

---

**¡Buena suerte con tu proyecto! 🎉**

Si tienes dudas mientras lo haces, revisa este documento y los recursos enlazados.

---

**Creado el:** 29 de Octubre, 2025  
**Autor del tutorial:** GitHub Copilot CLI  
**Proyecto base:** TaskApp Input Validations
