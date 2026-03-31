document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
  const currentAge = Number(document.getElementById("currentAge").value);
  const retirementAge = Number(document.getElementById("retirementAge").value);
  const yearsToRetire = retirementAge - currentAge;

  if (yearsToRetire <= 0) {
    document.getElementById("result").innerHTML =
      "<p>Retirement age must be greater than current age.</p>";
    return;
  }

  let balance = Number(document.getElementById("currentSavings").value);
  const avgIncome = Number(document.getElementById("avgIncome").value);
  const contribRate = Number(document.getElementById("contribRate").value) / 100;
  const returnRate = Number(document.getElementById("returnRate").value) / 100;
  const inflationRate = Number(document.getElementById("inflationRate").value) / 100;
  const withdrawRate = Number(document.getElementById("withdrawRate").value) / 100;

  for (let i = 0; i < yearsToRetire; i++) {
    const contribution = avgIncome * contribRate;
    balance = (balance + contribution) * (1 + returnRate);
  }

  const realFactor = Math.pow(1 + inflationRate, yearsToRetire);
  const balanceToday = balance / realFactor;

  const annualIncomeFuture = balance * withdrawRate;
  const annualIncomeToday = balanceToday * withdrawRate;

  const fmt = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
  });

  document.getElementById("result").innerHTML = `
    <h2>Results</h2>
    <p><strong>Years until retirement:</strong> ${yearsToRetire}</p>
    <p><strong>Retirement balance (future dollars):</strong> ${fmt.format(balance)}</p>
    <p><strong>Retirement balance (today's dollars):</strong> ${fmt.format(balanceToday)}</p>
    <p><strong>Sustainable yearly income (future dollars):</strong> ${fmt.format(annualIncomeFuture)}</p>
    <p><strong>Sustainable yearly income (today's dollars):</strong> ${fmt.format(annualIncomeToday)}</p>
  `;
}
