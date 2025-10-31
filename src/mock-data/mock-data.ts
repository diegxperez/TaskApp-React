import type { Task } from "../interfaces/task.interface";

export const mockdata: Task[] = [
  {
    id: crypto.randomUUID(),
    description: "Comprar leche y huevos en el supermercado",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Terminar el módulo de React Native para el viernes",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Llamar al dentista para agendar cita",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Pagar la factura de electricidad de este mes",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Hacer 30 minutos de ejercicio (cardio)",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: 'Leer el capítulo 5 del libro "Clean Code"',
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Enviar el reporte semanal al gerente",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Regar las plantas y abonar el jardín",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Organizar y limpiar el escritorio de la oficina",
    isCompleted: false,
  },
];
