export default function convertToSubcurrency(amount: number): number {
  return Math.round(amount * 100); // Převod na nejmenší měnovou jednotku (centy)
}
