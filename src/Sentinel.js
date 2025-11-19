export class Sentinel {
  constructor(pathname) {
    this.pathname = pathname;
    this.timestamp = new Date().toISOString();
    this.anchor = this.getAnchor(pathname);
    this.logEntry();
  }

  getAnchor(path) {
    if (path === "/") return "Homepage";
    if (path === "/public") return "Public Capsule";
    if (path === "/cockpit") return "Founder Cockpit";
    return "Unknown Route";
  }

  logEntry() {
    console.log(`[VaultiqX Sentinel] Entered: ${this.anchor}`);
    console.log(`[Timestamp] ${this.timestamp}`);
    console.log(`[Tribute] Sealed Memory with my Mother Challa Sunitha 💖`);
  }
}