const fileInput = document.querySelector("#fileInput");
const dateDimension = document.querySelector("#dateDimension");
const countryFilter = document.querySelector("#countryFilter");
const countrySelect = document.querySelector("#countrySelect");
const platformFilter = document.querySelector("#platformFilter");
const platformSelect = document.querySelector("#platformSelect");
const channelFilter = document.querySelector("#channelFilter");
const channelSelect = document.querySelector("#channelSelect");
const fileName = document.querySelector("#fileName");
const rowCount = document.querySelector("#rowCount");
const summaryDateRange = document.querySelector("#summaryDateRange");
const totalUsers = document.querySelector("#totalUsers");
const totalCost = document.querySelector("#totalCost");
const totalDay28Ratio = document.querySelector("#totalDay28Ratio");
const tableTitle = document.querySelector("#tableTitle");
const resultTable = document.querySelector("#resultTable");
const downloadCsv = document.querySelector("#downloadCsv");
const mappingPanel = document.querySelector("#mappingPanel");
const mappingGrid = document.querySelector("#mappingGrid");
const applyMapping = document.querySelector("#applyMapping");
const latestDate = document.querySelector("#latestDate");
const recentDay31 = document.querySelector("#recentDay31");
const recentDay31Label = document.querySelector("#recentDay31Label");
const recentDay31Range = document.querySelector("#recentDay31Range");
const recentDay73 = document.querySelector("#recentDay73");
const recentDay73Label = document.querySelector("#recentDay73Label");
const recentDay73Range = document.querySelector("#recentDay73Range");
const recentDay147 = document.querySelector("#recentDay147");
const recentDay147Label = document.querySelector("#recentDay147Label");
const recentDay147Range = document.querySelector("#recentDay147Range");
const recentDay2814 = document.querySelector("#recentDay2814");
const recentDay2814Label = document.querySelector("#recentDay2814Label");
const recentDay2814Range = document.querySelector("#recentDay2814Range");
const recentWindowInput = document.querySelector("#recentWindowInput");
const roiStandardInput = document.querySelector("#roiStandardInput");
const day1RoiTarget = document.querySelector("#day1RoiTarget");
const day3RoiTarget = document.querySelector("#day3RoiTarget");
const day7RoiTarget = document.querySelector("#day7RoiTarget");
const chartStart = document.querySelector("#chartStart");
const chartEnd = document.querySelector("#chartEnd");
const chartLeftMetric = document.querySelector("#chartLeftMetric");
const chartRightMetric = document.querySelector("#chartRightMetric");
const trendChart = document.querySelector("#trendChart");
const chartEmpty = document.querySelector("#chartEmpty");
const chartTooltip = document.querySelector("#chartTooltip");
const pieWindowInput = document.querySelector("#pieWindowInput");
const pieCountryFilter = document.querySelector("#pieCountryFilter");
const pieCountrySelect = document.querySelector("#pieCountrySelect");
const piePlatformFilter = document.querySelector("#piePlatformFilter");
const piePlatformSelect = document.querySelector("#piePlatformSelect");
const pieChannelFilter = document.querySelector("#pieChannelFilter");
const pieChannelSelect = document.querySelector("#pieChannelSelect");
const pieBreakdownSelect = document.querySelector("#pieBreakdownSelect");
const spendPieChart = document.querySelector("#spendPieChart");
const pieTooltip = document.querySelector("#pieTooltip");
const pieEmpty = document.querySelector("#pieEmpty");
const pieLegend = document.querySelector("#pieLegend");
const emailInput = document.querySelector("#emailInput");
const sendEmail = document.querySelector("#sendEmail");
const ALL_FILTER_VALUE = "__ALL__";

const DAY_FIELDS = ["day1", "day3", "day7", "day14", "day28", "day60", "day90", "day120", "day180", "day240", "day360"];
const DIMENSION_FIELDS = [
  { key: "country", label: "国家列", guesses: ["国家地区代码", "国家", "country"] },
  { key: "platform", label: "平台列", guesses: ["platform", "平台", "platfrom"] },
  { key: "channel", label: "渠道列", guesses: ["渠道", "channel"] },
];
const REQUIRED_FIELDS = [
  { key: "date", label: "日期列", guesses: ["初始事件发生时间", "初始事件的发生时间", "日期", "date"] },
];
const OPTIONAL_FIELDS = [
  { key: "users", label: "新增用户数", guesses: ["新增用户数", "new users", "users"] },
  { key: "cost", label: "花费", guesses: ["花费", "cost", "spend"] },
  { key: "day1", label: "1日 ROI", guesses: ["第1日", "1日", "day1", "d1"] },
  { key: "day3", label: "3日 ROI", guesses: ["第3日", "3日", "day3", "d3"] },
  { key: "day7", label: "7日 ROI", guesses: ["第7日", "7日", "day7", "d7"] },
  { key: "day14", label: "14日 ROI", guesses: ["第14日", "14日", "day14", "d14"] },
  { key: "day28", label: "28日 ROI", guesses: ["第28日", "28日", "day28", "d28"] },
  { key: "day60", label: "60日 ROI", guesses: ["第60日", "60日", "day60", "d60"] },
  { key: "day90", label: "90日 ROI", guesses: ["第90日", "90日", "day90", "d90"] },
  { key: "day120", label: "120日 ROI", guesses: ["第120日", "120日", "day120", "d120"] },
  { key: "day180", label: "180日 ROI", guesses: ["第180日", "180日", "day180", "d180"] },
  { key: "day240", label: "240日 ROI", guesses: ["第240日", "240日", "day240", "d240"] },
  { key: "day360", label: "360日 ROI", guesses: ["第360日", "360日", "day360", "d360"] },
];
const RATIO_COLUMNS = [
  { label: "14日倍率", numerator: "day14", denominator: "day1" },
  { label: "28日倍率", numerator: "day28", denominator: "day1" },
  { label: "day3/1", numerator: "day3", denominator: "day1" },
  { label: "day7/3", numerator: "day7", denominator: "day3" },
  { label: "day14/7", numerator: "day14", denominator: "day7" },
  { label: "day28/14", numerator: "day28", denominator: "day14" },
  { label: "day60/28", numerator: "day60", denominator: "day28" },
  { label: "day90/60", numerator: "day90", denominator: "day60" },
  { label: "day120/90", numerator: "day120", denominator: "day90" },
  { label: "day180/120", numerator: "day180", denominator: "day120" },
  { label: "day240/180", numerator: "day240", denominator: "day180" },
  { label: "day360/240", numerator: "day360", denominator: "day240" },
  { label: "day360/1", numerator: "day360", denominator: "day1" },
];
const TABLE_HEADERS = ["日期", "新增用户数", "花费", "day1ROI", ...RATIO_COLUMNS.map((column) => column.label)];
const CHART_METRICS = ["新增用户数", "花费", "day1ROI", ...RATIO_COLUMNS.map((column) => column.label)];
const RECENT_RATIO_CARDS = [
  { label: "day3/1", numerator: "day3", denominator: "day1", labelEl: recentDay31Label, valueEl: recentDay31, rangeEl: recentDay31Range },
  { label: "day7/3", numerator: "day7", denominator: "day3", labelEl: recentDay73Label, valueEl: recentDay73, rangeEl: recentDay73Range },
  { label: "day14/7", numerator: "day14", denominator: "day7", labelEl: recentDay147Label, valueEl: recentDay147, rangeEl: recentDay147Range },
  { label: "day28/14", numerator: "day28", denominator: "day14", labelEl: recentDay2814Label, valueEl: recentDay2814, rangeEl: recentDay2814Range },
];

const state = {
  rawRows: [],
  headers: [],
  records: [],
  dimensionEnabled: { country: true, platform: false, channel: false },
  options: { country: [], platform: [], channel: [] },
  currentRows: [],
  recentRatios: {},
  tableOrder: [...TABLE_HEADERS],
  chartHover: null,
  chartPoints: [],
  pieSegments: [],
};

fileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  event.target.value = "";
  fileName.textContent = file.name;
  tableTitle.textContent = "解析中";
  resetDataState();

  try {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array", cellDates: false });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: null });
    loadRawRows(rows);
    renderMappingPanel();
    populateChartMetricSelects();
    tableTitle.textContent = "等待字段匹配";
  } catch (error) {
    showError(error instanceof Error ? error.message : "表格解析失败");
  }
});

fileInput.addEventListener("click", () => {
  fileInput.value = "";
});

applyMapping.addEventListener("click", () => {
  try {
    const mapping = collectMapping();
    state.records = parseRowsWithMapping(state.rawRows, mapping);
    configureDimensionFilters(mapping);
    setControlsEnabled(true);
    render();
  } catch (error) {
    showError(error instanceof Error ? error.message : "字段匹配失败");
  }
});

dateDimension.addEventListener("change", render);
countrySelect.addEventListener("change", render);
platformSelect.addEventListener("change", render);
channelSelect.addEventListener("change", render);
recentWindowInput.addEventListener("input", () => {
  renderRecentMetrics(filterRecords(state.records));
});
roiStandardInput.addEventListener("input", renderRoiTargets);
chartStart.addEventListener("change", renderChart);
chartEnd.addEventListener("change", renderChart);
chartLeftMetric.addEventListener("change", renderChart);
chartRightMetric.addEventListener("change", renderChart);
trendChart.addEventListener("mousemove", handleChartHover);
trendChart.addEventListener("mouseleave", clearChartHover);
pieWindowInput.addEventListener("input", renderPieChart);
pieCountrySelect.addEventListener("change", renderPieChart);
piePlatformSelect.addEventListener("change", renderPieChart);
pieChannelSelect.addEventListener("change", renderPieChart);
pieBreakdownSelect.addEventListener("change", renderPieChart);
spendPieChart.addEventListener("mousemove", handlePieHover);
spendPieChart.addEventListener("mouseleave", clearPieHover);
sendEmail.addEventListener("click", sendEmailDraft);
downloadCsv.addEventListener("click", () => {
  if (!state.currentRows.length) return;
  const csv = toCsv(state.currentRows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${dateDimension.value}_${getFilterTitle().replaceAll("/", "_")}_summary.csv`;
  link.click();
  URL.revokeObjectURL(url);
});
document.addEventListener("click", closeOpenMultiSelects);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeOpenMultiSelects();
});
initCollapsiblePanels();
[
  [countrySelect, render],
  [platformSelect, render],
  [channelSelect, render],
  [pieCountrySelect, renderPieChart],
  [piePlatformSelect, renderPieChart],
  [pieChannelSelect, renderPieChart],
].forEach(([select, onChange]) => initMultiSelect(select, onChange));

function initCollapsiblePanels() {
  document.querySelectorAll("[data-collapsible]").forEach((panel) => {
    const header = panel.querySelector(".module-header");
    const body = panel.querySelector(".module-body");
    if (!header || !body) return;
    const target = header.querySelector(".module-actions") || header;
    if (target.querySelector(".collapse-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collapse-toggle";
    button.setAttribute("aria-expanded", "true");
    button.textContent = "收起";
    button.addEventListener("click", () => {
      const collapsed = panel.classList.toggle("is-collapsed");
      button.setAttribute("aria-expanded", String(!collapsed));
      button.textContent = collapsed ? "展开" : "收起";
      if (!collapsed) {
        requestAnimationFrame(() => {
          renderChart();
          renderPieChart();
        });
      }
    });
    target.append(button);
  });
}

function initMultiSelect(select, onChange) {
  const label = select.closest("label");
  if (!label || label.querySelector(".multi-select")) return;
  select.classList.add("native-multi-select");
  const wrapper = document.createElement("div");
  wrapper.className = "multi-select";
  wrapper.innerHTML = `
    <button class="multi-select-button" type="button" disabled>
      <span class="multi-select-value">不过滤</span>
      <span class="multi-select-arrow">⌄</span>
    </button>
    <div class="multi-select-menu"></div>
  `;
  label.append(wrapper);
  const button = wrapper.querySelector(".multi-select-button");
  const menu = wrapper.querySelector(".multi-select-menu");
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !wrapper.classList.contains("is-open");
    closeOpenMultiSelects();
    wrapper.classList.toggle("is-open", willOpen);
  });
  menu.addEventListener("click", (event) => event.stopPropagation());
  select.addEventListener("change", () => {
    syncMultiSelect(select);
    onChange();
  });
  syncMultiSelect(select);
}

function closeOpenMultiSelects() {
  document.querySelectorAll(".multi-select.is-open").forEach((wrapper) => {
    wrapper.classList.remove("is-open");
  });
}

function syncMultiSelect(select) {
  const label = select.closest("label");
  const wrapper = label?.querySelector(".multi-select");
  if (!wrapper) return;
  const button = wrapper.querySelector(".multi-select-button");
  const value = wrapper.querySelector(".multi-select-value");
  const menu = wrapper.querySelector(".multi-select-menu");
  button.disabled = select.disabled;
  value.textContent = displayFilterValue(getSelectedValues(select));
  menu.innerHTML = Array.from(select.options).map((option) => `
    <label class="multi-select-option">
      <input type="checkbox" value="${escapeHtml(option.value)}" ${option.selected ? "checked" : ""} ${select.disabled ? "disabled" : ""} />
      <span>${escapeHtml(option.textContent)}</span>
    </label>
  `).join("");
  menu.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const current = new Set(getSelectedValues(select));
      if (checkbox.checked) {
        if (checkbox.value === ALL_FILTER_VALUE) {
          current.clear();
          current.add(ALL_FILTER_VALUE);
        } else {
          current.delete(ALL_FILTER_VALUE);
          current.add(checkbox.value);
        }
      } else {
        current.delete(checkbox.value);
      }
      if (!current.size) current.add(ALL_FILTER_VALUE);
      setSelectedValues(select, [...current]);
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });
}

function resetDataState() {
  state.rawRows = [];
  state.headers = [];
  state.records = [];
  state.dimensionEnabled = { country: true, platform: false, channel: false };
  state.options = { country: [], platform: [], channel: [] };
  state.currentRows = [];
  state.recentRatios = {};
  state.tableOrder = [...TABLE_HEADERS];
  state.chartHover = null;
  state.chartPoints = [];
  state.pieSegments = [];
  countryFilter.hidden = false;
  platformFilter.hidden = true;
  channelFilter.hidden = true;
  rowCount.textContent = "0 行";
  renderSummary([]);
  renderRecentMetrics([]);
  renderRoiTargets();
  renderChart();
  renderPieChart();
  setControlsEnabled(false);
  downloadCsv.disabled = true;
}

function loadRawRows(rows) {
  if (!rows.length) throw new Error("工作表为空");
  state.headers = rows[0].map((header, index) => {
    const text = String(header ?? "").trim();
    return text || `未命名列 ${index + 1}`;
  });
  state.rawRows = rows.slice(1);
  rowCount.textContent = `${state.rawRows.length.toLocaleString("zh-CN")} 行`;
}

function renderMappingPanel() {
  mappingPanel.hidden = false;
  const fields = [...DIMENSION_FIELDS, ...REQUIRED_FIELDS, ...OPTIONAL_FIELDS];
  mappingGrid.innerHTML = fields.map((field) => {
    const guessedIndex = guessHeaderIndex(field.guesses);
    const options = state.headers
      .map((header, index) => `<option value="${index}" ${index === guessedIndex ? "selected" : ""}>${escapeHtml(header)}</option>`)
      .join("");
    const optional = !REQUIRED_FIELDS.some((required) => required.key === field.key);
    return `
      <label class="mapping-field" data-required="${optional ? "false" : "true"}">
        <span>${escapeHtml(field.label)}</span>
        <select data-field="${field.key}">
          <option value="">${optional ? "不匹配，留空" : "请选择"}</option>
          ${options}
        </select>
      </label>
    `;
  }).join("");
}

function guessHeaderIndex(guesses) {
  const normalizedHeaders = state.headers.map(normalizeHeader);
  for (const guess of guesses) {
    const normalizedGuess = normalizeHeader(guess);
    const exact = normalizedHeaders.indexOf(normalizedGuess);
    if (exact !== -1) return exact;
    const partial = normalizedHeaders.findIndex((header) => header.includes(normalizedGuess) || normalizedGuess.includes(header));
    if (partial !== -1) return partial;
  }
  return -1;
}

function collectMapping() {
  const mapping = {};
  [...DIMENSION_FIELDS, ...REQUIRED_FIELDS, ...OPTIONAL_FIELDS].forEach((field) => {
    const select = mappingGrid.querySelector(`select[data-field="${field.key}"]`);
    const optional = !REQUIRED_FIELDS.some((required) => required.key === field.key);
    if (!select || select.value === "") {
      if (optional) {
        mapping[field.key] = null;
        return;
      }
      throw new Error(`请匹配：${field.label}`);
    }
    mapping[field.key] = Number(select.value);
  });
  return mapping;
}

function parseRowsWithMapping(rows, mapping) {
  return rows
    .map((row) => {
      const date = parseSourceDate(row[mapping.date]);
      if (!date) return null;
      const values = {};
      const complete = {};
      const cost = mapping.cost === null ? null : toNumber(row[mapping.cost]);
      DAY_FIELDS.forEach((field) => {
        const cell = mapping[field] === null ? null : row[mapping[field]];
        values[field] = cost === null || mapping[field] === null ? 0 : cost * toNumber(cell);
        complete[field] = cost !== null && mapping[field] !== null && (cost === 0 || hasData(cell));
      });
      return {
        date,
        country: readDimensionValue(row, mapping.country),
        platform: readDimensionValue(row, mapping.platform),
        channel: readDimensionValue(row, mapping.channel),
        users: mapping.users === null ? null : toNumber(row[mapping.users]),
        cost: cost === null ? null : cost,
        values,
        complete,
      };
    })
    .filter(Boolean);
}

function readDimensionValue(row, columnIndex) {
  if (columnIndex === null || columnIndex === undefined) return "总体";
  const value = String(row[columnIndex] ?? "").trim();
  return value || "总体";
}

function parseSourceDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }
  const text = String(value ?? "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function hasData(value) {
  return value !== null && value !== undefined && String(value).trim() !== "" && String(value).trim() !== "-";
}

function toNumber(value) {
  if (!hasData(value)) return 0;
  const text = String(value).replaceAll(",", "").trim();
  const parsed = text.endsWith("%") ? Number(text.slice(0, -1)) / 100 : Number(text);
  return Number.isFinite(parsed) ? parsed : 0;
}

function collectDimensionOptions(records, field) {
  const seen = new Map();
  records.forEach((record) => {
    if (!record[field]) return;
    const key = normalizeValue(record[field]);
    if (!seen.has(key)) seen.set(key, record[field]);
  });
  const values = [...seen.values()].sort((a, b) => a.localeCompare(b, "zh-CN"));
  const preferred = ["总体", "US", "DE"].filter((value) => values.some((item) => normalizeValue(item) === normalizeValue(value)));
  const rest = values.filter((value) => !preferred.some((item) => normalizeValue(item) === normalizeValue(value)));
  return [...preferred, ...rest];
}

function configureDimensionFilters(mapping) {
  state.dimensionEnabled = {
    country: mapping.country !== null && mapping.country !== undefined,
    platform: mapping.platform !== null && mapping.platform !== undefined,
    channel: mapping.channel !== null && mapping.channel !== undefined,
  };
  state.options = {
    country: collectDimensionOptions(state.records, "country"),
    platform: collectDimensionOptions(state.records, "platform"),
    channel: collectDimensionOptions(state.records, "channel"),
  };
  populateDimensionSelect(countrySelect, state.options.country, [ALL_FILTER_VALUE]);
  populateDimensionSelect(platformSelect, state.options.platform, [ALL_FILTER_VALUE]);
  populateDimensionSelect(channelSelect, state.options.channel, [ALL_FILTER_VALUE]);
  populateDimensionSelect(pieCountrySelect, state.options.country, [ALL_FILTER_VALUE]);
  populateDimensionSelect(piePlatformSelect, state.options.platform, [ALL_FILTER_VALUE]);
  populateDimensionSelect(pieChannelSelect, state.options.channel, [ALL_FILTER_VALUE]);
  countryFilter.hidden = !state.dimensionEnabled.country;
  platformFilter.hidden = !state.dimensionEnabled.platform;
  channelFilter.hidden = !state.dimensionEnabled.channel;
  pieCountryFilter.hidden = !state.dimensionEnabled.country;
  piePlatformFilter.hidden = !state.dimensionEnabled.platform;
  pieChannelFilter.hidden = !state.dimensionEnabled.channel;
}

function populateDimensionSelect(select, values, defaults) {
  select.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = ALL_FILTER_VALUE;
  allOption.textContent = "不过滤";
  select.append(allOption);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
  const defaultValue = defaults.includes(ALL_FILTER_VALUE)
    ? ALL_FILTER_VALUE
    : defaults.map((target) => values.find((value) => normalizeValue(value) === normalizeValue(target))).find(Boolean);
  setSelectedValues(select, [defaultValue || ALL_FILTER_VALUE]);
  syncMultiSelect(select);
}

function render() {
  const dimension = dateDimension.value;
  const filteredRecords = filterRecords(state.records);
  const rows = summarize(filteredRecords, dimension);
  state.currentRows = rows;
  renderSummary(filteredRecords);
  renderRecentMetrics(filteredRecords);
  renderTable(rows);
  syncChartControls(rows);
  renderChart();
  renderPieChart();
  tableTitle.textContent = `${dimensionLabel(dimension)}维度 / ${getFilterTitle()}`;
  rowCount.textContent = `${state.records.length.toLocaleString("zh-CN")} 行`;
  downloadCsv.disabled = rows.length === 0;
  sendEmail.disabled = rows.length === 0;
}

function filterRecords(records) {
  const selected = {
    country: state.dimensionEnabled.country ? getSelectedValues(countrySelect) : [ALL_FILTER_VALUE],
    platform: state.dimensionEnabled.platform ? getSelectedValues(platformSelect) : [ALL_FILTER_VALUE],
    channel: state.dimensionEnabled.channel ? getSelectedValues(channelSelect) : [ALL_FILTER_VALUE],
  };
  return records.filter((record) => {
    if (!matchesDimension(record.country, selected.country)) return false;
    if (!matchesDimension(record.platform, selected.platform)) return false;
    if (!matchesDimension(record.channel, selected.channel)) return false;
    return true;
  });
}

function filterPieRecords(records) {
  const selected = {
    country: state.dimensionEnabled.country ? getSelectedValues(pieCountrySelect) : [ALL_FILTER_VALUE],
    platform: state.dimensionEnabled.platform ? getSelectedValues(piePlatformSelect) : [ALL_FILTER_VALUE],
    channel: state.dimensionEnabled.channel ? getSelectedValues(pieChannelSelect) : [ALL_FILTER_VALUE],
  };
  return records.filter((record) => {
    if (!matchesDimension(record.country, selected.country)) return false;
    if (!matchesDimension(record.platform, selected.platform)) return false;
    if (!matchesDimension(record.channel, selected.channel)) return false;
    return true;
  });
}

function matchesDimension(recordValue, selectedValues) {
  if (!selectedValues.length || selectedValues.includes(ALL_FILTER_VALUE)) return true;
  return selectedValues.some((value) => normalizeValue(recordValue) === normalizeValue(value));
}

function getFilterTitle() {
  const parts = [];
  if (state.dimensionEnabled.country) parts.push(displayFilterValue(getSelectedValues(countrySelect)));
  if (state.dimensionEnabled.platform) parts.push(displayFilterValue(getSelectedValues(platformSelect)));
  if (state.dimensionEnabled.channel) parts.push(displayFilterValue(getSelectedValues(channelSelect)));
  return parts.length ? parts.join(" / ") : "总体";
}

function getSelectedValues(select) {
  const values = Array.from(select.selectedOptions).map((option) => option.value);
  return values.length ? values : [ALL_FILTER_VALUE];
}

function setSelectedValues(select, values) {
  Array.from(select.options).forEach((option) => {
    option.selected = values.includes(option.value);
  });
}

function displayFilterValue(values) {
  if (!values.length || values.includes(ALL_FILTER_VALUE)) return "不过滤";
  if (values.length <= 2) return values.join("+");
  return `${values.slice(0, 2).join("+")} 等${values.length}项`;
}

function summarize(records, dimension) {
  const grouped = new Map();
  records.forEach((record) => {
    const key = getDateKey(record.date, dimension);
    if (!grouped.has(key)) {
      grouped.set(key, makeBucket(key, record.date, dimension));
    }
    const bucket = grouped.get(key);
    if (record.date < bucket.startDate) bucket.startDate = record.date;
    if (record.date > bucket.endDate) bucket.endDate = record.date;
    if (record.users !== null) {
      bucket.users += record.users;
      bucket.usersComplete = true;
    }
    if (record.cost !== null) {
      bucket.cost += record.cost;
      bucket.costComplete = true;
    }
    DAY_FIELDS.forEach((field) => {
      bucket.values[field] += record.values[field];
      bucket.complete[field] = bucket.complete[field] && record.complete[field];
    });
  });

  return [...grouped.values()]
    .sort((a, b) => a.sort.localeCompare(b.sort))
    .map((bucket) => {
      const row = {
        日期: bucket.key,
        日期范围: bucket.startDate && bucket.endDate ? `${formatDate(bucket.startDate)} 至 ${formatDate(bucket.endDate)}` : "",
        新增用户数: bucket.usersComplete ? bucket.users : null,
        花费: bucket.costComplete ? bucket.cost : null,
        day1ROI: buildDay1RoiValue(bucket),
      };
      RATIO_COLUMNS.forEach((column) => {
        row[column.label] = buildRatioValue(bucket, column);
      });
      return row;
    });
}

function makeBucket(key, date, dimension) {
  return {
    key,
    sort: getSortKey(date, dimension),
    startDate: date,
    endDate: date,
    users: 0,
    usersComplete: false,
    cost: 0,
    costComplete: false,
    values: Object.fromEntries(DAY_FIELDS.map((field) => [field, 0])),
    complete: Object.fromEntries(DAY_FIELDS.map((field) => [field, true])),
  };
}

function buildRatioValue(bucket, column) {
  if (!bucket.complete[column.numerator] || !bucket.complete[column.denominator]) {
    return { status: "missing", value: null };
  }
  const denominator = bucket.values[column.denominator];
  if (denominator === 0) return { status: "empty", value: null };
  return { status: "ok", value: bucket.values[column.numerator] / denominator };
}

function buildDay1RoiValue(bucket) {
  if (!bucket.costComplete || !bucket.complete.day1) {
    return { status: "missing", value: null };
  }
  if (bucket.cost === 0) return { status: "empty", value: null };
  return { status: "ok", value: bucket.values.day1 / bucket.cost };
}

function getDateKey(date, dimension) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  if (dimension === "day") return `${year}-${month}-${day}`;
  if (dimension === "month") return `${year}-${month}`;
  if (dimension === "quarter") return `${year}-Q${Math.floor(date.getMonth() / 3) + 1}`;
  if (dimension === "year") return String(year);
  const week = getIsoWeek(date);
  return `${week.year}-W${String(week.week).padStart(2, "0")}`;
}

function getSortKey(date, dimension) {
  if (dimension === "quarter") return `${date.getFullYear()}-${String(Math.floor(date.getMonth() / 3) + 1).padStart(2, "0")}`;
  return getDateKey(date, dimension);
}

function getIsoWeek(sourceDate) {
  const date = new Date(Date.UTC(sourceDate.getFullYear(), sourceDate.getMonth(), sourceDate.getDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return { year: date.getUTCFullYear(), week };
}

function normalizeValue(value) {
  return String(value ?? "").trim().toLowerCase();
}

function normalizeHeader(header) {
  return String(header ?? "").trim().toLowerCase().replace(/\s+/g, "");
}

function renderSummary(records) {
  if (!records.length) {
    summaryDateRange.textContent = "-";
    totalUsers.textContent = "-";
    totalCost.textContent = "-";
    totalDay28Ratio.textContent = "-";
    return;
  }
  const dates = records.map((record) => record.date).sort((a, b) => a - b);
  const users = records.reduce((sum, record) => sum + (record.users ?? 0), 0);
  const cost = records.reduce((sum, record) => sum + (record.cost ?? 0), 0);
  const day28Ratio = buildCompleteDailyRatio(records, "day28", "day1");
  summaryDateRange.textContent = `${formatDate(dates[0])} 至 ${formatDate(dates[dates.length - 1])}`;
  totalUsers.textContent = Math.round(users).toLocaleString("zh-CN");
  totalCost.textContent = formatMoney(cost);
  totalDay28Ratio.textContent = formatRatioStatus(day28Ratio);
}

function buildRecordRatio(records, numerator, denominator) {
  if (records.some((record) => !record.complete[numerator] || !record.complete[denominator])) {
    return { status: "missing", value: null };
  }
  const denominatorValue = records.reduce((sum, record) => sum + record.values[denominator], 0);
  if (denominatorValue === 0) return { status: "empty", value: null };
  const numeratorValue = records.reduce((sum, record) => sum + record.values[numerator], 0);
  return { status: "ok", value: numeratorValue / denominatorValue };
}

function buildCompleteDailyRatio(records, numerator, denominator) {
  const eligible = summarizeRecentDailyBuckets(records).filter(
    (bucket) => bucket.complete[numerator] && bucket.complete[denominator],
  );
  if (!eligible.length) return { status: "empty", value: null };
  const denominatorValue = eligible.reduce((sum, bucket) => sum + bucket.values[denominator], 0);
  if (denominatorValue === 0) return { status: "empty", value: null };
  const numeratorValue = eligible.reduce((sum, bucket) => sum + bucket.values[numerator], 0);
  return { status: "ok", value: numeratorValue / denominatorValue };
}

function renderRecentMetrics(records) {
  const windowSize = getRecentWindowSize();
  state.recentRatios = {};
  if (!records.length) {
    latestDate.textContent = "-";
    RECENT_RATIO_CARDS.forEach((card) => {
      card.labelEl.textContent = `近${windowSize}日 ${card.label}`;
      card.valueEl.textContent = "-";
      card.rangeEl.textContent = "-";
    });
    renderRoiTargets();
    return;
  }

  const dailyBuckets = summarizeRecentDailyBuckets(records);
  latestDate.textContent = dailyBuckets.length ? formatDate(dailyBuckets[0].date) : "-";
  RECENT_RATIO_CARDS.forEach((card) => {
    card.labelEl.textContent = `近${windowSize}日 ${card.label}`;
    const eligible = dailyBuckets
      .filter((bucket) => bucket.complete[card.numerator] && bucket.complete[card.denominator])
      .slice(0, windowSize);
    const denominator = eligible.reduce((sum, record) => sum + record.values[card.denominator], 0);
    const numerator = eligible.reduce((sum, record) => sum + record.values[card.numerator], 0);
    const ratio = eligible.length && denominator !== 0 ? numerator / denominator : null;
    state.recentRatios[card.label] = ratio;
    card.valueEl.textContent = ratio === null ? "-" : formatRatio(ratio);
    card.rangeEl.textContent = eligible.length ? `${formatDate(eligible[eligible.length - 1].date)} 至 ${formatDate(eligible[0].date)}，${eligible.length}日` : "无完整数据";
  });
  renderRoiTargets();
}

function summarizeRecentDailyBuckets(records) {
  const grouped = new Map();
  records.forEach((record) => {
    const key = formatDate(record.date);
    if (!grouped.has(key)) {
      grouped.set(key, {
        date: record.date,
        values: Object.fromEntries(DAY_FIELDS.map((field) => [field, 0])),
        complete: Object.fromEntries(DAY_FIELDS.map((field) => [field, true])),
      });
    }
    const bucket = grouped.get(key);
    DAY_FIELDS.forEach((field) => {
      bucket.values[field] += record.values[field];
      bucket.complete[field] = bucket.complete[field] && record.complete[field];
    });
  });
  return [...grouped.values()].sort((a, b) => b.date - a.date);
}

function getRecentWindowSize() {
  const parsed = Number(recentWindowInput.value);
  if (!Number.isFinite(parsed) || parsed < 1) return 30;
  return Math.floor(parsed);
}

function renderRoiTargets() {
  const standard = getRoiStandard();
  const day31 = state.recentRatios["day3/1"];
  const day73 = state.recentRatios["day7/3"];
  const day147 = state.recentRatios["day14/7"];
  const day2814 = state.recentRatios["day28/14"];
  day1RoiTarget.textContent = formatRoiTarget([day31, day73, day147, day2814, standard]);
  day3RoiTarget.textContent = formatRoiTarget([day73, day147, day2814, standard]);
  day7RoiTarget.textContent = formatRoiTarget([day147, day2814, standard]);
}

function getRoiStandard() {
  const parsed = Number(roiStandardInput.value);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function formatRoiTarget(factors) {
  if (factors.some((factor) => factor === null || factor === undefined || !Number.isFinite(factor) || factor === 0)) return "-";
  const multiplier = factors.reduce((product, factor) => product * factor, 1);
  return formatPercent(1.3 / multiplier);
}

function populateChartMetricSelects() {
  const options = CHART_METRICS.map((metric) => `<option value="${escapeHtml(metric)}">${escapeHtml(metric)}</option>`).join("");
  chartLeftMetric.innerHTML = options;
  chartRightMetric.innerHTML = options;
  chartLeftMetric.value = "新增用户数";
  chartRightMetric.value = "day3/1";
}

function syncChartControls(rows) {
  const previousStart = chartStart.value;
  const previousEnd = chartEnd.value;
  const options = rows.map((row) => `<option value="${escapeHtml(row["日期"])}">${escapeHtml(row["日期"])}</option>`).join("");
  chartStart.innerHTML = options;
  chartEnd.innerHTML = options;
  if (rows.length) {
    chartStart.value = rows.some((row) => row["日期"] === previousStart) ? previousStart : rows[0]["日期"];
    chartEnd.value = rows.some((row) => row["日期"] === previousEnd) ? previousEnd : rows[rows.length - 1]["日期"];
  }
}

function renderChart() {
  const ctx = trendChart.getContext("2d");
  resizeCanvasForDisplay(trendChart);
  ctx.clearRect(0, 0, trendChart.width, trendChart.height);
  state.chartPoints = [];
  const rows = getChartRows();
  if (!rows.length) {
    chartEmpty.hidden = false;
    clearChartHover();
    return;
  }

  const leftMetric = chartLeftMetric.value || "新增用户数";
  const rightMetric = chartRightMetric.value || "day3/1";
  const chartRows = rows.map((row) => ({
    label: row["日期"],
    left: getMetricValue(row, leftMetric),
    right: getMetricValue(row, rightMetric),
  }));
  const leftValues = chartRows.map((row) => row.left).filter((value) => value !== null);
  const rightValues = chartRows.map((row) => row.right).filter((value) => value !== null);
  if (!leftValues.length && !rightValues.length) {
    chartEmpty.hidden = false;
    clearChartHover();
    return;
  }
  chartEmpty.hidden = true;

  const plot = {
    x: 72,
    y: 30,
    width: trendChart.width - 144,
    height: trendChart.height - 100,
  };
  const leftScale = makeNumericScale(leftValues);
  const rightScale = makeNumericScale(rightValues);
  state.chartPoints = buildChartPoints(plot, chartRows, leftScale, rightScale, leftMetric, rightMetric);
  if (state.chartHover) {
    state.chartHover = state.chartPoints.find((point) => point.label === state.chartHover.label) || null;
  }
  drawAxes(ctx, plot, leftScale, rightScale, leftMetric, rightMetric);
  drawBars(ctx, plot, chartRows, leftScale);
  drawLine(ctx, plot, chartRows, rightScale);
  drawXAxisLabels(ctx, plot, chartRows);
  if (state.chartHover) drawHoverGuide(ctx, plot, state.chartHover);
}

function getChartRows() {
  if (!state.currentRows.length || !chartStart.value || !chartEnd.value) return [];
  const startIndex = state.currentRows.findIndex((row) => row["日期"] === chartStart.value);
  const endIndex = state.currentRows.findIndex((row) => row["日期"] === chartEnd.value);
  if (startIndex === -1 || endIndex === -1) return state.currentRows;
  return state.currentRows.slice(Math.min(startIndex, endIndex), Math.max(startIndex, endIndex) + 1);
}

function getMetricValue(row, metric) {
  if (metric === "新增用户数" || metric === "花费") return row[metric] ?? null;
  const cell = row[metric];
  return cell?.status === "ok" ? cell.value : null;
}

function resizeCanvasForDisplay(canvas) {
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width));
  canvas.height = Math.max(1, Math.floor(rect.height));
}

function makeNumericScale(values) {
  if (!values.length) return { min: 0, max: 1 };
  const min = Math.min(0, Math.min(...values));
  const rawMax = Math.max(...values);
  const max = rawMax === min ? rawMax + 1 : rawMax * 1.08;
  return { min, max };
}

function yForValue(value, scale, plot) {
  return plot.y + plot.height - ((value - scale.min) / (scale.max - scale.min)) * plot.height;
}

function drawAxes(ctx, plot, leftScale, rightScale, leftMetric, rightMetric) {
  ctx.save();
  ctx.strokeStyle = "#dbe2ea";
  ctx.fillStyle = "#657485";
  ctx.font = "12px sans-serif";
  ctx.textBaseline = "middle";
  for (let i = 0; i <= 4; i += 1) {
    const y = plot.y + (plot.height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(plot.x, y);
    ctx.lineTo(plot.x + plot.width, y);
    ctx.stroke();
    ctx.textAlign = "right";
    ctx.fillText(formatAxisValue(leftScale.max - ((leftScale.max - leftScale.min) / 4) * i), plot.x - 10, y);
    ctx.textAlign = "left";
    ctx.fillText(formatAxisValue(rightScale.max - ((rightScale.max - rightScale.min) / 4) * i), plot.x + plot.width + 10, y);
  }
  ctx.fillStyle = "#206a83";
  ctx.textAlign = "left";
  ctx.fillText(`柱：${leftMetric}`, plot.x, 14);
  ctx.fillStyle = "#b7472a";
  ctx.fillText(`线：${rightMetric}`, plot.x + 160, 14);
  ctx.restore();
}

function drawBars(ctx, plot, rows, scale) {
  const step = plot.width / Math.max(rows.length, 1);
  const barWidth = Math.max(4, Math.min(28, step * 0.56));
  ctx.save();
  ctx.fillStyle = "#206a83";
  rows.forEach((row, index) => {
    if (row.left === null) return;
    const x = plot.x + step * index + step / 2 - barWidth / 2;
    const y = yForValue(row.left, scale, plot);
    ctx.fillRect(x, y, barWidth, plot.y + plot.height - y);
  });
  ctx.restore();
}

function drawLine(ctx, plot, rows, scale) {
  const step = plot.width / Math.max(rows.length - 1, 1);
  ctx.save();
  ctx.strokeStyle = "#b7472a";
  ctx.fillStyle = "#b7472a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  let hasPath = false;
  rows.forEach((row, index) => {
    if (row.right === null) {
      if (hasPath) ctx.stroke();
      ctx.beginPath();
      hasPath = false;
      return;
    }
    const x = rows.length === 1 ? plot.x + plot.width / 2 : plot.x + step * index;
    const y = yForValue(row.right, scale, plot);
    if (!hasPath) {
      ctx.moveTo(x, y);
      hasPath = true;
    } else {
      ctx.lineTo(x, y);
    }
  });
  if (hasPath) ctx.stroke();
  rows.forEach((row, index) => {
    if (row.right === null) return;
    const x = rows.length === 1 ? plot.x + plot.width / 2 : plot.x + step * index;
    const y = yForValue(row.right, scale, plot);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function drawXAxisLabels(ctx, plot, rows) {
  ctx.save();
  ctx.fillStyle = "#657485";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  const step = plot.width / Math.max(rows.length - 1, 1);
  const labelEvery = Math.max(1, Math.ceil(rows.length / 10));
  rows.forEach((row, index) => {
    if (index % labelEvery !== 0 && index !== rows.length - 1) return;
    const x = rows.length === 1 ? plot.x + plot.width / 2 : plot.x + step * index;
    ctx.save();
    ctx.translate(x, plot.y + plot.height + 28);
    ctx.rotate(-Math.PI / 5);
    ctx.fillText(row.label, 0, 0);
    ctx.restore();
  });
  ctx.restore();
}

function buildChartPoints(plot, rows, leftScale, rightScale, leftMetric, rightMetric) {
  const step = plot.width / Math.max(rows.length - 1, 1);
  return rows.map((row, index) => {
    const x = rows.length === 1 ? plot.x + plot.width / 2 : plot.x + step * index;
    return {
      label: row.label,
      leftMetric,
      rightMetric,
      left: row.left,
      right: row.right,
      x,
      leftY: row.left === null ? null : yForValue(row.left, leftScale, plot),
      rightY: row.right === null ? null : yForValue(row.right, rightScale, plot),
    };
  });
}

function drawHoverGuide(ctx, plot, point) {
  ctx.save();
  ctx.strokeStyle = "rgba(23, 32, 42, 0.32)";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(point.x, plot.y);
  ctx.lineTo(point.x, plot.y + plot.height);
  ctx.stroke();
  ctx.setLineDash([]);
  if (point.leftY !== null) {
    ctx.fillStyle = "#206a83";
    ctx.beginPath();
    ctx.arc(point.x, point.leftY, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  if (point.rightY !== null) {
    ctx.fillStyle = "#b7472a";
    ctx.beginPath();
    ctx.arc(point.x, point.rightY, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function handleChartHover(event) {
  if (!state.chartPoints.length || chartEmpty.hidden === false) return;
  const rect = trendChart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const closest = state.chartPoints.reduce((best, point) => {
    const distance = Math.abs(point.x - x);
    return !best || distance < best.distance ? { point, distance } : best;
  }, null);
  if (!closest || closest.distance > Math.max(18, rect.width / Math.max(state.chartPoints.length, 1))) {
    clearChartHover();
    return;
  }
  state.chartHover = closest.point;
  renderChart();
  showChartTooltip(closest.point, event.clientX - rect.left, event.clientY - rect.top);
}

function showChartTooltip(point, x, y) {
  chartTooltip.hidden = false;
  chartTooltip.innerHTML = `
    <strong>${escapeHtml(point.label)}</strong>
    <div><span>${escapeHtml(point.leftMetric)}</span><b>${formatTooltipValue(point.left)}</b></div>
    <div><span>${escapeHtml(point.rightMetric)}</span><b>${formatTooltipValue(point.right)}</b></div>
  `;
  const wrap = trendChart.parentElement.getBoundingClientRect();
  const tooltipRect = chartTooltip.getBoundingClientRect();
  const left = Math.min(Math.max(x + 16, 8), wrap.width - tooltipRect.width - 8);
  const top = Math.min(Math.max(y - tooltipRect.height - 12, 8), wrap.height - tooltipRect.height - 8);
  chartTooltip.style.left = `${left}px`;
  chartTooltip.style.top = `${top}px`;
}

function clearChartHover() {
  state.chartHover = null;
  chartTooltip.hidden = true;
}

function formatTooltipValue(value) {
  if (value === null || value === undefined) return "数据缺失";
  if (Math.abs(value) >= 1000) return Math.round(value).toLocaleString("zh-CN");
  return formatRatio(value);
}

function formatAxisValue(value) {
  if (Math.abs(value) >= 1000) return Math.round(value).toLocaleString("zh-CN");
  return Number(value).toFixed(2);
}

function renderPieChart() {
  const ctx = spendPieChart.getContext("2d");
  resizeCanvasForDisplay(spendPieChart);
  ctx.clearRect(0, 0, spendPieChart.width, spendPieChart.height);
  state.pieSegments = [];
  pieLegend.innerHTML = "";
  const records = getRecentPieRecords(filterPieRecords(state.records));
  if (!records.length) {
    pieEmpty.hidden = false;
    clearPieHover();
    return;
  }

  const breakdown = pieBreakdownSelect.value || "channel";
  const buckets = new Map();
  records.forEach((record) => {
    const key = record[breakdown] || "未命名";
    buckets.set(key, (buckets.get(key) || 0) + (record.cost || 0));
  });
  const segments = [...buckets.entries()]
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1]);
  const total = segments.reduce((sum, [, value]) => sum + value, 0);
  if (!segments.length || total === 0) {
    pieEmpty.hidden = false;
    clearPieHover();
    return;
  }
  pieEmpty.hidden = true;

  const cx = spendPieChart.width / 2;
  const cy = spendPieChart.height / 2;
  const radius = Math.min(spendPieChart.width, spendPieChart.height) * 0.36;
  let start = 0;
  state.pieSegments = segments.map(([label, value], index) => {
    const angle = (value / total) * Math.PI * 2;
    const segment = {
      label,
      value,
      percent: value / total,
      start,
      end: start + angle,
      color: pieColor(index),
      cx,
      cy,
      radius,
    };
    start += angle;
    return segment;
  });

  state.pieSegments.forEach((segment) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, segment.start - Math.PI / 2, segment.end - Math.PI / 2);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
  renderPieLegend();
}

function getRecentPieRecords(records) {
  const windowSize = getPieWindowSize();
  const dates = [...new Set(records.map((record) => formatDate(record.date)))]
    .sort()
    .slice(-windowSize);
  const dateSet = new Set(dates);
  return records.filter((record) => dateSet.has(formatDate(record.date)));
}

function getPieWindowSize() {
  const parsed = Number(pieWindowInput.value);
  if (!Number.isFinite(parsed) || parsed < 1) return 30;
  return Math.floor(parsed);
}

function renderPieLegend() {
  pieLegend.innerHTML = state.pieSegments
    .map((segment) => `
      <div class="pie-legend-row">
        <span class="pie-legend-color" style="background:${segment.color}"></span>
        <strong>${escapeHtml(segment.label)}</strong>
        <span>${formatMoney(segment.value)}</span>
        <span>${formatRatio(segment.percent * 100)}%</span>
      </div>
    `)
    .join("");
}

function handlePieHover(event) {
  if (!state.pieSegments.length || pieEmpty.hidden === false) return;
  const rect = spendPieChart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const first = state.pieSegments[0];
  const dx = x - first.cx;
  const dy = y - first.cy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > first.radius) {
    clearPieHover();
    return;
  }
  let angle = Math.atan2(dy, dx) + Math.PI / 2;
  if (angle < 0) angle += Math.PI * 2;
  const segment = state.pieSegments.find((item) => angle >= item.start && angle <= item.end);
  if (!segment) {
    clearPieHover();
    return;
  }
  pieTooltip.hidden = false;
  pieTooltip.innerHTML = `
    <strong>${escapeHtml(segment.label)}</strong>
    <div><span>花费</span><b>${formatMoney(segment.value)}</b></div>
    <div><span>占比</span><b>${formatRatio(segment.percent * 100)}%</b></div>
  `;
  const tooltipRect = pieTooltip.getBoundingClientRect();
  pieTooltip.style.left = `${Math.min(Math.max(x + 14, 8), rect.width - tooltipRect.width - 8)}px`;
  pieTooltip.style.top = `${Math.min(Math.max(y - tooltipRect.height - 12, 8), rect.height - tooltipRect.height - 8)}px`;
}

function clearPieHover() {
  pieTooltip.hidden = true;
}

function pieColor(index) {
  const colors = ["#206a83", "#d0793f", "#6aa76f", "#b7472a", "#8a70b8", "#bf6585", "#7b8f3a", "#4a8fb8", "#c9a227", "#5f7388"];
  return colors[index % colors.length];
}

function renderTable(rows) {
  const orderedHeaders = getOrderedHeaders();
  resultTable.querySelector("thead").innerHTML = `<tr>${orderedHeaders
    .map((header) => `<th draggable="true" data-column="${escapeHtml(header)}">${escapeHtml(header)}</th>`)
    .join("")}</tr>`;
  bindColumnDrag();
  const tbody = resultTable.querySelector("tbody");
  if (!rows.length) {
    tbody.innerHTML = `<tr><td class="empty-state" colspan="${orderedHeaders.length}">没有匹配数据</td></tr>`;
    return;
  }

  const scales = Object.fromEntries(
    RATIO_COLUMNS.map((column) => [
      column.label,
      getScale(rows.map((row) => row[column.label]).filter((cell) => cell.status === "ok").map((cell) => cell.value)),
    ]),
  );

  tbody.innerHTML = rows
    .map((row) => `<tr>${orderedHeaders.map((header) => renderCell(row, header, scales)).join("")}</tr>`)
    .join("");
}

function getOrderedHeaders() {
  const valid = state.tableOrder.filter((header) => TABLE_HEADERS.includes(header));
  const missing = TABLE_HEADERS.filter((header) => !valid.includes(header));
  return [...valid, ...missing];
}

function bindColumnDrag() {
  resultTable.querySelectorAll("th[draggable='true']").forEach((headerCell) => {
    headerCell.addEventListener("dragstart", (event) => {
      headerCell.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", headerCell.dataset.column);
    });
    headerCell.addEventListener("dragend", () => {
      headerCell.classList.remove("dragging");
      resultTable.querySelectorAll("th.drop-target").forEach((cell) => cell.classList.remove("drop-target"));
    });
    headerCell.addEventListener("dragover", (event) => {
      event.preventDefault();
      headerCell.classList.add("drop-target");
      event.dataTransfer.dropEffect = "move";
    });
    headerCell.addEventListener("dragleave", () => {
      headerCell.classList.remove("drop-target");
    });
    headerCell.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = event.dataTransfer.getData("text/plain");
      const to = headerCell.dataset.column;
      moveColumn(from, to);
    });
  });
}

function moveColumn(from, to) {
  if (!from || !to || from === to) return;
  const order = getOrderedHeaders();
  const fromIndex = order.indexOf(from);
  const toIndex = order.indexOf(to);
  if (fromIndex === -1 || toIndex === -1) return;
  order.splice(fromIndex, 1);
  order.splice(toIndex, 0, from);
  state.tableOrder = order;
  renderTable(state.currentRows);
}

function renderCell(row, header, scales) {
  if (header === "日期") return renderDateCell(row);
  if (header === "新增用户数") return `<td>${row[header] === null ? "" : Math.round(row[header]).toLocaleString("zh-CN")}</td>`;
  if (header === "花费") return `<td>${row[header] === null ? "" : formatMoney(row[header])}</td>`;
  if (header === "day1ROI") return renderPercentStatusCell(row[header]);
  return renderRatioCell(row[header], scales[header]);
}

function renderDateCell(row) {
  const dimension = dateDimension.value;
  const range = dimension === "day" ? "" : row["日期范围"];
  return `<td><span class="date-cell"><strong>${escapeHtml(row["日期"])}</strong>${range ? `<small>${escapeHtml(range)}</small>` : ""}</span></td>`;
}

function renderRatioCell(cell, scale) {
  if (cell.status === "missing") {
    return `<td class="missing-cell">数据缺失</td>`;
  }
  if (cell.status === "empty") {
    return `<td></td>`;
  }
  const color = colorForValue(cell.value, scale);
  return `<td class="heat-cell" style="--heat-bg:${color}">${formatRatio(cell.value)}</td>`;
}

function renderPercentStatusCell(cell) {
  if (cell.status === "missing") {
    return `<td class="missing-cell">数据缺失</td>`;
  }
  if (cell.status === "empty") {
    return `<td></td>`;
  }
  return `<td>${formatPercent(cell.value)}</td>`;
}

function getScale(values) {
  if (!values.length) return { min: 0, mid: 0, max: 0 };
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, mid: (min + max) / 2, max };
}

function colorForValue(value, scale) {
  if (scale.max === scale.min) return "rgb(255, 235, 132)";
  const midpoint = scale.mid;
  if (value <= midpoint) {
    return interpolateColor([248, 105, 107], [255, 235, 132], (value - scale.min) / (midpoint - scale.min || 1));
  }
  return interpolateColor([255, 235, 132], [99, 190, 123], (value - midpoint) / (scale.max - midpoint || 1));
}

function interpolateColor(start, end, amount) {
  const safeAmount = Math.max(0, Math.min(1, amount));
  const rgb = start.map((channel, index) => Math.round(channel + (end[index] - channel) * safeAmount));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function formatRatio(value) {
  return Number(value).toFixed(2);
}

function formatPercent(value) {
  return `${(Number(value) * 100).toFixed(2)}%`;
}

function formatRatioStatus(cell) {
  if (!cell || cell.status === "empty") return "-";
  if (cell.status === "missing") return "数据缺失";
  return formatRatio(cell.value);
}

function formatPercentStatus(cell) {
  if (!cell || cell.status === "empty") return "";
  if (cell.status === "missing") return "数据缺失";
  return formatPercent(cell.value);
}

function formatMoney(value) {
  return Number(value || 0).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toCsv(rows) {
  const orderedHeaders = getOrderedHeaders();
  const lines = [orderedHeaders.join(",")];
  rows.forEach((row) => {
    lines.push(
      orderedHeaders.map((header) => {
        let value = row[header];
        if (header === "新增用户数") value = value === null ? null : Math.round(value);
        if (header === "花费") value = value === null ? null : Number(value || 0).toFixed(2);
        if (header === "day1ROI") value = formatPercentStatus(value);
        if (typeof value === "object" && value !== null) {
          value = value.status === "missing" ? "数据缺失" : value.value === null ? null : formatRatio(value.value);
        }
        return value === null || value === undefined ? "" : `"${String(value).replaceAll('"', '""')}"`;
      }).join(","),
    );
  });
  return `\uFEFF${lines.join("\n")}`;
}

function sendEmailDraft() {
  const email = emailInput.value.trim();
  if (!email || !email.includes("@")) {
    emailInput.focus();
    return;
  }
  const subject = `倍率汇总 - ${tableTitle.textContent}`;
  const body = buildEmailBody();
  window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildEmailBody() {
  const rows = state.currentRows.slice(0, 12);
  const headers = getOrderedHeaders();
  const lines = [
    `当前筛选：${tableTitle.textContent}`,
    `数据日期区间：${summaryDateRange.textContent}`,
    `汇总新增用户数：${totalUsers.textContent}`,
    `汇总花费：${totalCost.textContent}`,
    `总计 day28 倍率：${totalDay28Ratio.textContent}`,
    `最新日期：${latestDate.textContent}`,
    "",
    headers.join("\t"),
    ...rows.map((row) => headers.map((header) => formatEmailCell(row, header)).join("\t")),
  ];
  return lines.join("\n");
}

function formatEmailCell(row, header) {
  if (header === "日期") return row[header] ?? "";
  if (header === "新增用户数") return row[header] === null ? "" : Math.round(row[header]).toLocaleString("zh-CN");
  if (header === "花费") return row[header] === null ? "" : formatMoney(row[header]);
  if (header === "day1ROI") return formatPercentStatus(row[header]);
  const cell = row[header];
  if (!cell) return "";
  if (cell.status === "missing") return "数据缺失";
  if (cell.status === "empty") return "";
  return formatRatio(cell.value);
}

function dimensionLabel(value) {
  return { day: "日", week: "周", month: "月", quarter: "季度", year: "年" }[value] ?? value;
}

function setControlsEnabled(enabled) {
  dateDimension.disabled = !enabled;
  countrySelect.disabled = !enabled;
  platformSelect.disabled = !enabled;
  channelSelect.disabled = !enabled;
  recentWindowInput.disabled = !enabled;
  roiStandardInput.disabled = !enabled;
  chartStart.disabled = !enabled;
  chartEnd.disabled = !enabled;
  chartLeftMetric.disabled = !enabled;
  chartRightMetric.disabled = !enabled;
  pieWindowInput.disabled = !enabled;
  pieCountrySelect.disabled = !enabled;
  piePlatformSelect.disabled = !enabled;
  pieChannelSelect.disabled = !enabled;
  pieBreakdownSelect.disabled = !enabled;
  [countrySelect, platformSelect, channelSelect, pieCountrySelect, piePlatformSelect, pieChannelSelect].forEach(syncMultiSelect);
  downloadCsv.disabled = !enabled || !state.currentRows.length;
  sendEmail.disabled = !enabled || !state.currentRows.length;
}

function showError(message) {
  tableTitle.textContent = "解析失败";
  rowCount.textContent = "0 行";
  renderSummary([]);
  renderRecentMetrics([]);
  renderChart();
  resultTable.querySelector("thead").innerHTML = "";
  resultTable.querySelector("tbody").innerHTML = `<tr><td class="empty-state" colspan="${getOrderedHeaders().length}">${escapeHtml(message)}</td></tr>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
