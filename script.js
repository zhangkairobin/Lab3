document.getElementById('tipCalculatorForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // 获取输入的值
  var billTotal = parseFloat(document.getElementById('billTotal').value);
  var tipPercentage = parseFloat(document.getElementById('tipSlider').value);

  // 计算小费金额
  var tipAmount = billTotal * (tipPercentage / 100);

  // 计算带小费的账单总额
  var totalBillWithTip = billTotal + tipAmount;

  // 更新Tip Percentage字段
  document.getElementById('tipPercentage').value = tipPercentage + "%";

  // 更新Tip Amount字段并保留两位小数
  document.getElementById('tipAmount').value = tipAmount.toFixed(2);

  // 更新Total Bill with Tip字段并保留两位小数
  document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
});
