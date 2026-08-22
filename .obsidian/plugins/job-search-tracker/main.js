var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => JobSearchPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  applicationsFolder: "Job Search"
};
var JS_VIEW_TYPE = "js-pipeline-view";
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function today() {
  return new Date().toISOString().split("T")[0];
}
function fmtDate(d) {
  if (!d)
    return "";
  const parts = d.split("-");
  if (parts.length < 3)
    return d;
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}
async function ensureFolder(app, path) {
  const normalized = (0, import_obsidian.normalizePath)(path);
  if (!await app.vault.adapter.exists(normalized)) {
    await app.vault.createFolder(normalized);
  }
}
function buildFrontmatter(obj) {
  const lines = ["---"];
  for (const [k, v] of Object.entries(obj)) {
    if (v === void 0 || v === null || v === "")
      continue;
    lines.push(k + ": " + JSON.stringify(v));
  }
  lines.push("---", "");
  return lines.join("\n");
}
async function parseFrontmatter(app, file) {
  const cache = app.metadataCache.getFileCache(file);
  if (cache == null ? void 0 : cache.frontmatter)
    return cache.frontmatter;
  const raw = await app.vault.read(file);
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m)
    return {};
  const result = {};
  for (const line of m[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon < 0)
      continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    try {
      result[key] = JSON.parse(val);
    } catch (e) {
      result[key] = val;
    }
  }
  return result;
}
async function updateFrontmatterField(app, file, key, value) {
  const content = await app.vault.read(file);
  const match = content.match(/^(---\n[\s\S]*?\n---)/);
  if (!match)
    return;
  const fmBlock = match[1];
  const cleaned = fmBlock.replace(new RegExp("^" + key + ":.*$", "m"), "").replace(/\n{2,}/g, "\n");
  const newFm = cleaned.replace(
    /\n---$/,
    "\n" + key + ": " + JSON.stringify(value) + "\n---"
  );
  await app.vault.modify(file, content.replace(match[1], newFm));
}
var AddApplicationModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.company = "";
    this.role = "";
    this.location = "";
    this.salary = "";
    this.url = "";
    this.source = "LinkedIn";
    this.status = "applied";
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("js-modal");
    contentEl.createEl("h2", { text: "Add Application" });
    new import_obsidian.Setting(contentEl).setName("Company").addText((t) => {
      t.setPlaceholder("e.g. Acme Corp");
      t.onChange((v) => this.company = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Role / Title").addText((t) => {
      t.setPlaceholder("e.g. Sales Manager");
      t.onChange((v) => this.role = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Location").addText((t) => {
      t.setPlaceholder("e.g. Cape Town / Remote");
      t.onChange((v) => this.location = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Salary range").addText((t) => {
      t.setPlaceholder("e.g. R600k \u2013 R750k p/a");
      t.onChange((v) => this.salary = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Job URL").addText((t) => {
      t.setPlaceholder("https://...");
      t.onChange((v) => this.url = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Source").addDropdown((d) => {
      ["LinkedIn", "Referral", "Company site", "Other"].forEach(
        (s) => d.addOption(s, s)
      );
      d.setValue("LinkedIn");
      d.onChange((v) => this.source = v);
    });
    new import_obsidian.Setting(contentEl).setName("Status").addDropdown((d) => {
      d.addOption("bookmarked", "Bookmarked");
      d.addOption("applied", "Applied");
      d.addOption("phone-screen", "Phone Screen");
      d.addOption("interview", "Interview");
      d.addOption("offer", "Offer");
      d.addOption("rejected", "Rejected");
      d.addOption("withdrawn", "Withdrawn");
      d.setValue("applied");
      d.onChange((v) => this.status = v);
    });
    const btnRow = contentEl.createDiv({ cls: "setting-item" });
    const btn = btnRow.createEl("button", {
      text: "Add Application",
      cls: "js-btn-primary"
    });
    btn.onclick = () => this.submit();
  }
  async submit() {
    if (!this.company || !this.role) {
      new import_obsidian.Notice("Company and role are required.");
      return;
    }
    await this.plugin.createApplication({
      company: this.company,
      role: this.role,
      location: this.location,
      salary: this.salary,
      url: this.url,
      source: this.source,
      status: this.status
    });
    this.close();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var UpdateStatusModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.appName = "";
    this.newStatus = "applied";
    this.note = "";
    this.plugin = plugin;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.addClass("js-modal");
    contentEl.createEl("h2", { text: "Update Application Status" });
    const apps = await this.plugin.getApplicationNames();
    new import_obsidian.Setting(contentEl).setName("Application").addDropdown((d) => {
      if (apps.length === 0) {
        d.addOption("", "\u2014 no applications found \u2014");
      } else {
        apps.forEach((a) => d.addOption(a, a));
        this.appName = apps[0];
      }
      d.onChange((v) => this.appName = v);
    });
    new import_obsidian.Setting(contentEl).setName("New status").addDropdown((d) => {
      d.addOption("bookmarked", "Bookmarked");
      d.addOption("applied", "Applied");
      d.addOption("phone-screen", "Phone Screen");
      d.addOption("interview", "Interview");
      d.addOption("offer", "Offer");
      d.addOption("rejected", "Rejected");
      d.addOption("withdrawn", "Withdrawn");
      d.setValue("applied");
      d.onChange((v) => this.newStatus = v);
    });
    new import_obsidian.Setting(contentEl).setName("Note (optional)").addTextArea((ta) => {
      ta.setPlaceholder("What happened? Next steps?");
      ta.onChange((v) => this.note = v);
      ta.inputEl.rows = 3;
    });
    const btnRow = contentEl.createDiv({ cls: "setting-item" });
    const btn = btnRow.createEl("button", {
      text: "Update Status",
      cls: "js-btn-primary"
    });
    btn.onclick = () => this.submit();
  }
  async submit() {
    if (!this.appName) {
      new import_obsidian.Notice("No application selected.");
      return;
    }
    await this.plugin.updateApplicationStatus(
      this.appName,
      this.newStatus,
      this.note
    );
    this.close();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var AddContactModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.linkedTo = "";
    this.contactName = "";
    this.contactRole = "";
    this.email = "";
    this.notes = "";
    this.plugin = plugin;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.addClass("js-modal");
    contentEl.createEl("h2", { text: "Add Contact" });
    const apps = await this.plugin.getApplicationNames();
    new import_obsidian.Setting(contentEl).setName("Linked application / company").addDropdown((d) => {
      if (apps.length === 0) {
        d.addOption("", "\u2014 no applications \u2014");
      } else {
        d.addOption("", "\u2014 none \u2014");
        apps.forEach((a) => d.addOption(a, a));
      }
      d.onChange((v) => this.linkedTo = v);
    });
    new import_obsidian.Setting(contentEl).setName("Contact name").addText((t) => {
      t.setPlaceholder("Jane Smith");
      t.onChange((v) => this.contactName = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Contact role / title").addText((t) => {
      t.setPlaceholder("e.g. Hiring Manager");
      t.onChange((v) => this.contactRole = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Email").addText((t) => {
      t.setPlaceholder("jane@company.com");
      t.onChange((v) => this.email = v.trim());
    });
    new import_obsidian.Setting(contentEl).setName("Notes").addTextArea((ta) => {
      ta.setPlaceholder("How did you meet? Any context?");
      ta.onChange((v) => this.notes = v);
      ta.inputEl.rows = 3;
    });
    const btnRow = contentEl.createDiv({ cls: "setting-item" });
    const btn = btnRow.createEl("button", {
      text: "Save Contact",
      cls: "js-btn-primary"
    });
    btn.onclick = () => this.submit();
  }
  async submit() {
    if (!this.contactName) {
      new import_obsidian.Notice("Contact name is required.");
      return;
    }
    await this.plugin.createContact({
      linkedTo: this.linkedTo,
      name: this.contactName,
      role: this.contactRole,
      email: this.email,
      notes: this.notes
    });
    this.close();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var PIPELINE_COLUMNS = [
  { key: "bookmarked", label: "Bookmarked" },
  { key: "applied", label: "Applied" },
  { key: "phone-screen", label: "Phone Screen" },
  { key: "interview", label: "Interview" },
  { key: "offer", label: "Offer" },
  { key: "rejected", label: "Rejected" },
  { key: "withdrawn", label: "Withdrawn" }
];
var JobPipelineView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return JS_VIEW_TYPE;
  }
  getDisplayText() {
    return "Job Search";
  }
  getIcon() {
    return "briefcase";
  }
  async onOpen() {
    await this.render();
  }
  async render() {
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("js-sidebar");
    const header = container.createDiv({ cls: "js-sidebar-header" });
    header.createEl("h2", { text: "Job Search" });
    const refreshBtn = header.createEl("button", {
      cls: "js-btn-icon",
      attr: { title: "Refresh" },
      text: "\u21BB"
    });
    refreshBtn.onclick = () => this.render();
    const applications = await this.plugin.getAllApplicationData();
    const pipeline = container.createDiv({ cls: "js-pipeline" });
    for (const col of PIPELINE_COLUMNS) {
      const colApps = applications.filter((a) => a.status === col.key);
      const colDiv = pipeline.createDiv({
        cls: "js-column js-column--" + col.key
      });
      const colHeader = colDiv.createDiv({ cls: "js-column-header" });
      colHeader.createSpan({ cls: "js-column-title", text: col.label });
      colHeader.createSpan({
        cls: "js-column-count",
        text: String(colApps.length)
      });
      const cardsEl = colDiv.createDiv({ cls: "js-cards" });
      if (colApps.length === 0) {
        cardsEl.createDiv({ cls: "js-empty-col", text: "None" });
        continue;
      }
      for (const a of colApps) {
        const card = cardsEl.createDiv({ cls: "js-card" });
        card.onclick = () => this.app.workspace.openLinkText(a.file.path, "", false);
        card.createDiv({ cls: "js-card-role", text: a.role });
        card.createDiv({ cls: "js-card-company", text: a.company });
        if (a.dateApplied) {
          card.createDiv({
            cls: "js-card-date",
            text: fmtDate(a.dateApplied)
          });
        }
      }
    }
  }
  async onClose() {
  }
};
var JobSearchSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Job Search Tracker Settings" });
    new import_obsidian.Setting(containerEl).setName("Applications folder").setDesc("Folder where application notes are stored.").addText((t) => {
      t.setPlaceholder("Job Search");
      t.setValue(this.plugin.settings.applicationsFolder);
      t.onChange(async (v) => {
        this.plugin.settings.applicationsFolder = v.trim() || "Job Search";
        await this.plugin.saveSettings();
      });
    });
  }
};
var JobSearchPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.registerView(
      JS_VIEW_TYPE,
      (leaf) => new JobPipelineView(leaf, this)
    );
    this.addRibbonIcon("briefcase", "Job Search Tracker", () => {
      this.activateSidebar();
    });
    this.addCommand({
      id: "add-application",
      name: "Add Application",
      callback: () => new AddApplicationModal(this.app, this).open()
    });
    this.addCommand({
      id: "update-status",
      name: "Update Application Status",
      callback: () => new UpdateStatusModal(this.app, this).open()
    });
    this.addCommand({
      id: "add-contact",
      name: "Add Contact",
      callback: () => new AddContactModal(this.app, this).open()
    });
    this.addCommand({
      id: "open-pipeline",
      name: "Open Job Pipeline",
      callback: () => this.activateSidebar()
    });
    this.addSettingTab(new JobSearchSettingTab(this.app, this));
    this.registerEvent(
      this.app.metadataCache.on("changed", () => {
        this.refreshSidebarIfOpen();
      })
    );
  }
  async onunload() {
    this.app.workspace.detachLeavesOfType(JS_VIEW_TYPE);
  }
  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      await this.loadData()
    );
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async activateSidebar() {
    const existing = this.app.workspace.getLeavesOfType(JS_VIEW_TYPE);
    if (existing.length > 0) {
      this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = this.app.workspace.getRightLeaf(false);
    if (leaf) {
      await leaf.setViewState({ type: JS_VIEW_TYPE, active: true });
      this.app.workspace.revealLeaf(leaf);
    }
  }
  refreshSidebarIfOpen() {
    const leaves = this.app.workspace.getLeavesOfType(JS_VIEW_TYPE);
    for (const leaf of leaves) {
      leaf.view.render();
    }
  }
  // ── Data operations ──────────────────────────────────────────────────────
  async createApplication(opts) {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Applications"
    );
    await ensureFolder(this.app, this.settings.applicationsFolder);
    await ensureFolder(this.app, folder);
    const dt = today();
    const slug = slugify(opts.company + "-" + opts.role);
    const fileName = (0, import_obsidian.normalizePath)(folder + "/" + slug + ".md");
    if (await this.app.vault.adapter.exists(fileName)) {
      new import_obsidian.Notice(
        'Application for "' + opts.role + '" at ' + opts.company + " already exists."
      );
      return;
    }
    const fm = buildFrontmatter({
      type: "application",
      company: opts.company,
      role: opts.role,
      location: opts.location || void 0,
      salary: opts.salary || void 0,
      url: opts.url || void 0,
      source: opts.source,
      status: opts.status,
      date_applied: dt
    });
    const content = fm + "# " + opts.role + " @ " + opts.company + "\n\n**Company:** " + opts.company + "\n**Role:** " + opts.role + "\n" + (opts.location ? "**Location:** " + opts.location + "\n" : "") + (opts.salary ? "**Salary:** " + opts.salary + "\n" : "") + (opts.url ? "**Job URL:** " + opts.url + "\n" : "") + "**Source:** " + opts.source + "\n**Applied:** " + dt + "\n\n## Notes\n\n";
    await this.app.vault.create(fileName, content);
    if (opts.status === "interview") {
      await this.createInterviewPrepNote(opts.company, opts.role, slug);
    }
    new import_obsidian.Notice(
      'Application added: "' + opts.role + '" at ' + opts.company + "."
    );
  }
  async updateApplicationStatus(appName, newStatus, note) {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Applications"
    );
    const filePath = (0, import_obsidian.normalizePath)(folder + "/" + appName + ".md");
    const file = this.app.vault.getAbstractFileByPath(filePath);
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice('Application file "' + appName + '" not found.');
      return;
    }
    await updateFrontmatterField(this.app, file, "status", newStatus);
    if (note.trim()) {
      const existing = await this.app.vault.read(file);
      const dt = today();
      await this.app.vault.modify(
        file,
        existing + "\n---\n**Status update " + dt + " \u2192 " + newStatus + "**\n\n" + note.trim() + "\n"
      );
    }
    if (newStatus === "interview") {
      const fm = await parseFrontmatter(this.app, file);
      const company = fm["company"] || "";
      const role = fm["role"] || "";
      const slug = appName;
      await this.createInterviewPrepNote(company, role, slug);
    }
    new import_obsidian.Notice(
      '"' + appName + '" status updated to ' + newStatus + "."
    );
    this.refreshSidebarIfOpen();
  }
  async createInterviewPrepNote(company, role, slug) {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Interview Prep"
    );
    await ensureFolder(this.app, folder);
    const fileName = (0, import_obsidian.normalizePath)(folder + "/" + slug + "-prep.md");
    if (await this.app.vault.adapter.exists(fileName))
      return;
    const content = "# Interview Prep \u2013 " + role + " @ " + company + "\n\nApplication: [[" + slug + "]]\n\n---\n\n## Company Research\n\n- What does the company do?\n- Recent news / announcements?\n- Culture and values?\n- Who are their customers?\n\n## Questions to Ask\n\n- What does success look like in the first 90 days?\n- What are the biggest challenges facing the team?\n- What does the typical career path look like?\n\n## Answers to Prepare\n\n### Tell me about yourself\n\n\n### Why this role?\n\n\n### Why this company?\n\n\n### Biggest achievement\n\n\n### Handling a difficult situation (STAR)\n\n\n";
    await this.app.vault.create(fileName, content);
    new import_obsidian.Notice("Interview prep note created for " + role + " @ " + company + ".");
  }
  async createContact(opts) {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Contacts"
    );
    await ensureFolder(this.app, this.settings.applicationsFolder);
    await ensureFolder(this.app, folder);
    const slug = slugify(opts.name);
    const fileName = (0, import_obsidian.normalizePath)(folder + "/" + slug + ".md");
    const fm = buildFrontmatter({
      type: "contact",
      name: opts.name,
      contact_role: opts.role || void 0,
      email: opts.email || void 0,
      linked_to: opts.linkedTo || void 0
    });
    const content = fm + "# " + opts.name + "\n\n" + (opts.role ? "**Role:** " + opts.role + "\n" : "") + (opts.email ? "**Email:** " + opts.email + "\n" : "") + (opts.linkedTo ? "**Application:** [[" + opts.linkedTo + "]]\n" : "") + "\n## Notes\n\n" + (opts.notes || "") + "\n";
    await this.app.vault.create(fileName, content);
    new import_obsidian.Notice('Contact "' + opts.name + '" saved.');
  }
  async getApplicationNames() {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Applications"
    );
    const files = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(folder + "/"));
    const names = [];
    for (const f of files) {
      const fm = await parseFrontmatter(this.app, f);
      if (fm["type"] === "application")
        names.push(f.basename);
    }
    return names.sort();
  }
  async getAllApplicationData() {
    const folder = (0, import_obsidian.normalizePath)(
      this.settings.applicationsFolder + "/Applications"
    );
    const files = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(folder + "/"));
    const result = [];
    for (const f of files) {
      const fm = await parseFrontmatter(this.app, f);
      if (fm["type"] !== "application")
        continue;
      result.push({
        file: f,
        company: fm["company"] || "",
        role: fm["role"] || "",
        location: fm["location"] || "",
        salary: fm["salary"] || "",
        url: fm["url"] || "",
        source: fm["source"] || "Other",
        status: fm["status"] || "applied",
        dateApplied: fm["date_applied"] || ""
      });
    }
    return result.sort((a, b) => {
      if (b.dateApplied > a.dateApplied)
        return 1;
      if (b.dateApplied < a.dateApplied)
        return -1;
      return a.company.localeCompare(b.company);
    });
  }
};

/* nosourcemap */