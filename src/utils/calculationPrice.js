const CalculationPrice = (width, length, height, thickness) => {
  const pricePerSquareMeter = 140; // Ціна за квадратний метр штукатурки
  const pricePerCubicMeter = 120; // Ціна за кубічний метр штукатурки
  // const additionalMaterialsCost = 4234; // Вартість додаткових матеріалів
  const pricePerMillimeterThickness = 50  ; // Допустим, вам нужно установить цену за миллиметр толщины штукатурки

  // Розрахунок площі стін, що потребують штукатурки
  const wallArea = 2 * (width * height) + 2 * (length * height);

  // Розрахунок об'єму штукатурки, необхідного для покриття стін з урахуванням товщини
  const plasterVolume = wallArea * (thickness / 1000); // переводимо міліметри в метри

  // Розрахунок вартості штукатурки за товщину
  const thicknessCost = wallArea * thickness * pricePerMillimeterThickness;

  // Розрахунок загальної вартості штукатурки
  const plasteringCost = plasterVolume * pricePerCubicMeter;

  // Перевірка на нульові значення, щоб уникнути розрахунку для неповних даних
  if (width === 0 || length === 0 || height === 0 || thickness === 0) {
    return 0; // Якщо один з параметрів дорівнює нулю, повертаємо 0
  }

  // Розрахунок загальної вартості робіт і матеріалів
  const totalCost = (wallArea * pricePerSquareMeter) + (plasteringCost) + thicknessCost;
  // + additionalMaterialsCost

  return totalCost;
};
export default CalculationPrice;