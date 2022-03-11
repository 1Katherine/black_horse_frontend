// 定义格式化时间的函数
function dataFormat(dateStr) {
  const dt = new Date(dateStr);

  const y = dt.getFullYear();
  const m = pzdZero(dt.getMonth() + 1);
  const d = pzdZero(dt.getDate());

  const hh = pzdZero(dt.getHours());
  const mm = pzdZero(dt.getMinutes());
  const ss = pzdZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

function pzdZero(n) {
  return n > 9 ? n : "0" + n;
}

module.exports = {
  dataFormat,
};
