function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function maskWhatsappBR(value: string): { masked: string; digits: string } {
  const digits = digitsOnly(value).slice(0, 11);
  const ddd = digits.slice(0, 2);
  const first = digits.slice(2, 3);
  const mid = digits.slice(3, 7);
  const end = digits.slice(7, 11);

  if (digits.length <= 2) {
    return { masked: digits, digits };
  }

  if (digits.length <= 6) {
    return { masked: `(${ddd}) ${digits.slice(2)}`, digits };
  }

  if (digits.length <= 10) {
    const left = digits.slice(2, 6);
    const right = digits.slice(6, 10);
    return { masked: `(${ddd}) ${left}-${right}`, digits };
  }

  return { masked: `(${ddd}) ${first} ${mid}-${end}`, digits };
}
