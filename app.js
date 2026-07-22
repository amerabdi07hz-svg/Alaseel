/* ---- React hooks from global ---- */
var React = window.React;
var useState = React.useState, useEffect = React.useEffect, useMemo = React.useMemo,
    useCallback = React.useCallback, createContext = React.createContext, useContext = React.useContext;

/* ---- Recharts from global UMD ---- */
var R = window.Recharts;
var BarChart=R.BarChart, Bar=R.Bar, LineChart=R.LineChart, Line=R.Line, PieChart=R.PieChart,
    Pie=R.Pie, Cell=R.Cell, XAxis=R.XAxis, YAxis=R.YAxis, CartesianGrid=R.CartesianGrid,
    Tooltip=R.Tooltip, ResponsiveContainer=R.ResponsiveContainer, Legend=R.Legend;

/* ============================================================
   SVG Icons
   ============================================================ */
function Icon({ children, size }) {
  return React.createElement('svg', {
    width: size || 24, height: size || 24, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 2,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { display: 'block', flexShrink: 0 }, 'aria-hidden': true
  }, children);
}

var LayoutDashboard = function(p) { return <Icon size={p.size}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></Icon>; };
var Users = function(p) { return <Icon size={p.size}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></Icon>; };
var UserRound = function(p) { return <Icon size={p.size}><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></Icon>; };
var Truck = function(p) { return <Icon size={p.size}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></Icon>; };
var UserIcon = function(p) { return <Icon size={p.size}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>; };
var LogOut = function(p) { return <Icon size={p.size}><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></Icon>; };
var Search = function(p) { return <Icon size={p.size}><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></Icon>; };
var Plus = function(p) { return <Icon size={p.size}><path d="M5 12h14"/><path d="M12 5v14"/></Icon>; };
var Pencil = function(p) { return <Icon size={p.size}><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></Icon>; };
var Trash2 = function(p) { return <Icon size={p.size}><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></Icon>; };
var Printer = function(p) { return <Icon size={p.size}><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></Icon>; };
var Moon = function(p) { return <Icon size={p.size}><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></Icon>; };
var Sun = function(p) { return <Icon size={p.size}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></Icon>; };
var Shield = function(p) { return <Icon size={p.size}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></Icon>; };
var X = function(p) { return <Icon size={p.size}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>; };
var Check = function(p) { return <Icon size={p.size}><path d="M20 6 9 17l-5-5"/></Icon>; };
var ChevronUp = function(p) { return <Icon size={p.size}><path d="m18 15-6-6-6 6"/></Icon>; };
var ChevronDown = function(p) { return <Icon size={p.size}><path d="m6 9 6 6 6-6"/></Icon>; };
var Filter = function(p) { return <Icon size={p.size}><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></Icon>; };
var Save = function(p) { return <Icon size={p.size}><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></Icon>; };
var RotateCcw = function(p) { return <Icon size={p.size}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></Icon>; };
var Download = function(p) { return <Icon size={p.size}><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></Icon>; };
var Upload = function(p) { return <Icon size={p.size}><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></Icon>; };
var Eye = function(p) { return <Icon size={p.size}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></Icon>; };
var EyeOff = function(p) { return <Icon size={p.size}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></Icon>; };
var Power = function(p) { return <Icon size={p.size}><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></Icon>; };
var Menu = function(p) { return <Icon size={p.size}><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></Icon>; };
var ClipboardList = function(p) { return <Icon size={p.size}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></Icon>; };
var KeyRound = function(p) { return <Icon size={p.size}><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/></Icon>; };
var AlertTriangle = function(p) { return <Icon size={p.size}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></Icon>; };
var Wallet = function(p) { return <Icon size={p.size}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></Icon>; };
var Receipt = function(p) { return <Icon size={p.size}><path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></Icon>; };
var TrendingUp = function(p) { return <Icon size={p.size}><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></Icon>; };
var Package = function(p) { return <Icon size={p.size}><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></Icon>; };
var FileText = function(p) { return <Icon size={p.size}><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></Icon>; };
var FileJson = function(p) { return <Icon size={p.size}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1"/></Icon>; };

/* ============================================================
   نظام الأصيل للخدمات الإعلانية - الدوال المساعدة وقاعدة البيانات
   ============================================================ */
const BRAND = "#283D74";
const BRAND_LIGHT = "#3C4F81";
const GREY = "#D1D3D4";

const DB = {
  async get(collection, key, fallback) {
    try {
      if (!window._fs || !window._db) return fallback;
      const snap = await window._fs.getDoc(window._fs.doc(window._db, collection, key));
      if (snap.exists()) {
        const d = snap.data();
        return d && "v" in d ? d.v : fallback;
      }
      return fallback;
    } catch (e) {
      console.error("Firestore get error", collection, key, e);
      return fallback;
    }
  },
  async set(collection, key, value) {
    try {
      if (!window._fs || !window._db) return false;
      await window._fs.setDoc(window._fs.doc(window._db, collection, key), { v: value });
      return true;
    } catch (e) {
      console.error("Firestore set error", collection, key, e);
      return false;
    }
  },
};

/* ---- تشفير كلمات المرور بـ SHA-256 مع ملح ---- */
const PWD_SALT = "As33l2024!@#Sh0p";
async function hashPwd(password) {
  const data = new TextEncoder().encode(PWD_SALT + password + PWD_SALT);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ---- دوال مساعدة ---- */
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const now = () => new Date().toISOString();
const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleString("ar-EG", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }) : "—";
const money = (n) => (Number(n) || 0).toLocaleString("en-US", { maximumFractionDigits: 2 });

/* ---- التحقق من صحة المدخلات ---- */
function validateForm(fields) {
  for (const f of fields) {
    if (!f.value || !String(f.value).trim()) return f.label + " مطلوب";
    if (f.type === "num" && f.value !== "" && isNaN(Number(f.value))) return f.label + " يجب أن يكون رقماً";
    if (f.type === "posNum" && Number(f.value) < 0) return f.label + " يجب أن يكون رقماً موجباً";
    if (f.min && String(f.value).trim().length < f.min) return f.label + " يجب أن يكون " + f.min + " أحرف على الأقل";
  }
  return null;
}

/* ---- تصدير البيانات ---- */
function exportJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename + ".json"; a.click();
  URL.revokeObjectURL(url);
}
function importJSON(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try { callback(JSON.parse(e.target.result)); }
    catch { callback(null); }
  };
  reader.readAsText(file);
}

const PAGES = [
  { key: "dashboard", label: "الرئيسية" },
  { key: "employees", label: "الموظفون" },
  { key: "customers", label: "الزبائن" },
  { key: "suppliers", label: "الموردون" },
  { key: "users", label: "إدارة المستخدمين" },
  { key: "audit", label: "سجل العمليات" },
  { key: "backup", label: "النسخ الاحتياطي" },
];

const DEFAULT_ROLES = [
  { id: "admin", name: "مدير", pages: ["dashboard", "employees", "customers", "suppliers", "users", "audit", "backup"], locked: true },
  { id: "employee", name: "موظف", pages: ["employees"], locked: false },
];

const Ctx = createContext(null);
const useApp = () => useContext(Ctx);

/* ============================================================
   تطبيق React الرئيسي
   ============================================================ */
function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState("light");
  const [session, setSession] = useState(null);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [audit, setAudit] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    (async () => {
      let u = await DB.get("users", "main", null);
      let r = await DB.get("roles", "main", null);
      if (!r) { r = DEFAULT_ROLES; await DB.set("roles", "main", r); }
      // ضمان وجود دور الموظف بالصلاحيات الصحيحة
      const empIdx = r.findIndex((role) => role.id === "employee");
      if (empIdx >= 0) {
        r[empIdx] = { ...r[empIdx], pages: ["employees"] };
      } else {
        r.push({ id: "employee", name: "موظف", pages: ["employees"], locked: false });
      }
      await DB.set("roles", "main", r);
      if (!u) {
        const defaultPwd = await hashPwd("admin123");
        u = [{
          id: uid(), username: "admin", name: "المدير العام",
          pwd: defaultPwd, roleId: "admin", active: true,
          avatar: "", lastLogin: null, createdAt: now(),
        }];
        await DB.set("users", "main", u);
      }
      setUsers(u); setRoles(r);
      setEmployees(await DB.get("employees", "main", []));
      setCustomers(await DB.get("customers", "main", []));
      setSuppliers(await DB.get("suppliers", "main", []));
      setAudit(await DB.get("audit", "main", []));
      setTheme(await DB.get("settings", "theme", "light"));
      setLoaded(true);
    })();
  }, []);

  const persist = {
    users: (v) => { setUsers(v); DB.set("users", "main", v); },
    roles: (v) => { setRoles(v); DB.set("roles", "main", v); },
    employees: (v) => { setEmployees(v); DB.set("employees", "main", v); },
    customers: (v) => { setCustomers(v); DB.set("customers", "main", v); },
    suppliers: (v) => { setSuppliers(v); DB.set("suppliers", "main", v); },
    audit: (v) => { setAudit(v); DB.set("audit", "main", v); },
  };

  const toast = useCallback((msg, type = "success") => {
    const id = uid();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  const log = useCallback((action, entity, detail) => {
    const entry = { id: uid(), user: session?.name || "—", action, entity, detail, at: now() };
    setAudit((prev) => { const next = [entry, ...prev].slice(0, 1000); DB.set("audit", "main", next); return next; });
  }, [session]);

  const toggleTheme = () => { const t = theme === "light" ? "dark" : "light"; setTheme(t); DB.set("settings", "theme", t); };

  const currentRole = useMemo(
    () => roles.find((r) => r.id === session?.roleId) || null,
    [roles, session]
  );

  const isAdmin = currentRole?.id === "admin";
  const mine = useCallback(
    (arr) => (isAdmin || !session ? arr : arr.filter((x) => x.createdBy === session.id)),
    [isAdmin, session]
  );

  const value = {
    theme, toggleTheme, session, setSession,
    users, roles, employees, customers, suppliers, audit,
    persist, toast, log, currentRole, isAdmin, mine, setToasts,
  };

  if (!loaded) {
    return (
      <div dir="rtl" style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f1f3f8", fontFamily: "Tajawal, sans-serif" }}>
        <div style={{ color: BRAND, fontWeight: 700 }}>جاري التحميل…</div>
      </div>
    );
  }

  return (
    <Ctx.Provider value={value}>
      <div dir="rtl" data-theme={theme} className="app-root">
        {!session ? <Login /> : <Shell />}
        <ToastStack toasts={toasts} />
      </div>
    </Ctx.Provider>
  );
}

/* ============================================================
   مكونات النظام
   ============================================================ */
function Login() {
  const { users, persist, setSession, toast } = useApp();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setErr(""); setLoading(true);
    const found = users.find((x) => x.username.trim().toLowerCase() === u.trim().toLowerCase());
    if (!found) { setErr("اسم المستخدم غير موجود"); setLoading(false); return; }
    if (!found.active) { setErr("هذا الحساب موقوف. راجع المدير"); setLoading(false); return; }
    const hashed = await hashPwd(p);
    if (found.pwd !== hashed) { setErr("كلمة المرور غير صحيحة"); setLoading(false); return; }
    const updated = users.map((x) => (x.id === found.id ? { ...x, lastLogin: now() } : x));
    persist.users(updated);
    setSession({ ...found, lastLogin: now() });
    toast("مرحباّ " + found.name);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 16,
      background: "radial-gradient(1200px 600px at 80% -10%, rgba(60,79,129,.25), transparent), var(--bg)" }}>
      <div className="card" style={{ width: "100%", maxWidth: 400, padding: 34 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Logo size={58} />
          <h1 className="heading" style={{ margin: "16px 0 4px", fontSize: 22, color: "var(--brand)" }}>الأصيل</h1>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 13, fontWeight: 700 }}>للخدمات الإعلانية</p>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label className="label">اسم المستخدم</label>
          <input className="input" value={u} onChange={(e) => setU(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()} placeholder="admin" autoFocus />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label className="label">كلمة المرور</label>
          <div style={{ position: "relative" }}>
            <input className="input" type={show ? "text" : "password"} value={p}
              onChange={(e) => setP(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="••••••••" style={{ paddingLeft: 42 }} />
            <button className="icon-btn" onClick={() => setShow(!show)}
              style={{ position: "absolute", left: 5, top: 4, width: 32, height: 32, border: "none", background: "none" }}
              aria-label="إظهار كلمة المرور">
              {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>
        {err && <div style={{ color: "#e5484d", fontSize: 13, fontWeight: 700, margin: "8px 0 4px" }}>{err}</div>}
        <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 14, padding: 12 }} onClick={submit} disabled={loading}>
          {loading ? "جاري التحقق…" : "تسجيل الدخول"}
        </button>
      </div>
    </div>
  );
}

function Logo({ size = 40 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: 14, background: BRAND, color: "#fff",
      fontFamily: "Cairo, sans-serif", fontWeight: 800, fontSize: size * 0.5, boxShadow: "0 6px 16px rgba(40,61,116,.35)" }}>
      أ
    </div>
  );
}

function Shell() {
  const { session, currentRole, theme, toggleTheme, setSession, toast } = useApp();
  const [page, setPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const allowed = (currentRole?.pages && currentRole.pages.length > 0) ? currentRole.pages : (session?.roleId === "employee" ? ["employees"] : []);
  const visiblePages = PAGES.filter((p) => allowed.includes(p.key));

  useEffect(() => {
    if (!allowed.includes(page)) setPage(visiblePages[0]?.key || "profile");
  }, [allowed]);

  const icons = {
    dashboard: LayoutDashboard, employees: Users, customers: UserRound,
    suppliers: Truck, users: Shield, audit: ClipboardList, backup: Save,
  };

  const nav = (k) => { setPage(k); setMobileOpen(false); };

  const rootRef = React.useRef(null);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const check = () => setIsMobile(el.clientWidth < 820);
    check();
    let ro;
    if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(check); ro.observe(el); }
    window.addEventListener("resize", check);
    return () => { if (ro) ro.disconnect(); window.removeEventListener("resize", check); };
  }, []);
  useEffect(() => { if (!isMobile) setMobileOpen(false); }, [isMobile]);

  return (
    <div ref={rootRef} style={{ display: "flex", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {isMobile && mobileOpen && (
        <div className="no-print" onClick={() => setMobileOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.45)", zIndex: 60, touchAction: "none" }} />
      )}

      <aside className="no-print" style={{
        width: isMobile ? 260 : 250, background: "var(--surface)", borderInlineStart: "1px solid var(--line)",
        display: isMobile && !mobileOpen ? "none" : "flex", flexDirection: "column", padding: 16, zIndex: 70,
        ...(isMobile ? { position: "fixed", top: 0, bottom: 0, insetInlineEnd: 0, transform: mobileOpen ? "translateX(0)" : "translateX(100%)", boxShadow: mobileOpen ? "-8px 0 30px rgba(0,0,0,.2)" : "none", transition: "transform .25s ease" }
                     : { position: "fixed", top: 0, bottom: 0, insetInlineEnd: 0, transform: "translateX(0)", transition: "transform .25s ease" }),
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "6px 8px 18px" }}>
          <Logo size={40} />
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <div className="heading" style={{ fontWeight: 800, color: "var(--brand)", fontSize: 16, whiteSpace: "nowrap" }}>الأصيل</div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700, whiteSpace: "nowrap" }}>للخدمات الإعلانية</div>
          </div>
          {isMobile && (
            <button className="icon-btn" style={{ marginInlineStart: "auto", flexShrink: 0 }} onClick={() => setMobileOpen(false)} aria-label="إغلاق"><X size={18} /></button>
          )}
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, overflowY: "auto" }}>
          {visiblePages.map((p) => {
            const I = icons[p.key];
            return (
              <button key={p.key} className={`sidebar-link ${page === p.key ? "active" : ""}`} onClick={() => nav(p.key)}>
                <I size={19} /> <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{p.label}</span>
              </button>
            );
          })}
          <button className={`sidebar-link ${page === "profile" ? "active" : ""}`} onClick={() => nav("profile")}>
            <UserIcon size={19} /> <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>الملف الشخصي</span>
          </button>
        </nav>
        <button className="sidebar-link" style={{ color: "#e5484d" }} onClick={() => { setSession(null); toast("تم تسجيل الخروج"); }}>
          <LogOut size={19} /> <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>تسجيل الخروج</span>
        </button>
      </aside>

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", marginInlineEnd: isMobile ? 0 : 250, width: isMobile ? "100%" : "auto" }}>
        <TopBar page={page} isMobile={isMobile} onMenu={() => setMobileOpen(true)} theme={theme} toggleTheme={toggleTheme} />
        <main style={{ padding: isMobile ? 14 : 20, flex: 1 }}>
          {page === "dashboard" && <Dashboard />}
          {page === "employees" && <Employees />}
          {page === "customers" && <Customers />}
          {page === "suppliers" && <Suppliers />}
          {page === "users" && <UsersAdmin />}
          {page === "audit" && <AuditLog />}
          {page === "backup" && <Backup />}
          {page === "profile" && <Profile />}
        </main>
      </div>
    </div>
  );
}

function TopBar({ page, isMobile, onMenu, theme, toggleTheme }) {
  const { session, currentRole } = useApp();
  const title = [...PAGES, { key: "profile", label: "الملف الشخصي" }].find((p) => p.key === page)?.label || "";
  return (
    <header className="no-print" style={{ background: "var(--surface)", borderBottom: "1px solid var(--line)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, zIndex: 30 }}>
      {isMobile && <button className="icon-btn" onClick={onMenu} style={{ flexShrink: 0 }}><Menu size={19} /></button>}
      <h2 className="heading" style={{ margin: 0, fontSize: 16, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0, flex: 1 }}>{title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <button className="icon-btn" onClick={toggleTheme} style={{ flexShrink: 0 }}>{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}</button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {!isMobile && (
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 800 }}>{session.name}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>{currentRole?.name}</div>
            </div>
          )}
          <Avatar user={session} size={36} />
        </div>
      </div>
    </header>
  );
}

function Avatar({ user, size = 38 }) {
  if (user.avatar) return <img src={user.avatar} alt="" style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", display: "block", flexShrink: 0 }} />;
  return <div style={{ width: size, height: size, borderRadius: "50%", background: BRAND, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, fontSize: size * 0.42, flexShrink: 0 }}>{(user.name || "?").trim().charAt(0)}</div>;
}

function DataTable({ columns, rows, title, filters, emptyMsg }) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState({ key: null, dir: 1 });
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let r = rows;
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      r = r.filter((row) => columns.some((c) => String(getVal(row, c)).toLowerCase().includes(s)));
    }
    if (sort.key) {
      const col = columns.find((c) => c.key === sort.key);
      r = [...r].sort((a, b) => {
        let x = getVal(a, col), y = getVal(b, col);
        if (col.type === "num") { x = Number(x) || 0; y = Number(y) || 0; } else { x = String(x); y = String(y); }
        return x < y ? -sort.dir : x > y ? sort.dir : 0;
      });
    }
    return r;
  }, [rows, q, sort, columns]);

  function getVal(row, col) { return col.value ? col.value(row) : row[col.key]; }
  const clickSort = (c) => { if (c.noSort) return; setSort((s) => (s.key === c.key ? { key: c.key, dir: -s.dir } : { key: c.key, dir: 1 })); };

  return (
    <div>
      <div className="toolbar no-print" style={{ marginBottom: 14 }}>
        <div style={{ position: "relative", flex: "1 1 220px", minWidth: 180 }}>
          <span style={{ position: "absolute", insetInlineStart: 11, top: 11, color: "var(--muted)" }}><Search size={16} /></span>
          <input className="input" style={{ paddingInlineStart: 34 }} placeholder="بحث فوري…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {filters && <button className="btn btn-ghost" onClick={() => setShowFilters(!showFilters)}><Filter size={15} /> تصفية</button>}
        <button className="btn btn-ghost" onClick={() => window.print()}><Printer size={15} /> طباعة</button>
      </div>
      {showFilters && filters && <div className="card no-print" style={{ padding: 14, marginBottom: 14 }}>{filters}</div>}
      <div className="card print-area scroll-x">
        <table>
          <thead>
            <tr>{columns.map((c) => <th key={c.key} className={c.noSort ? "no-sort" : ""} onClick={() => clickSort(c)}>{c.label} {sort.key === c.key && (sort.dir === 1 ? <ChevronUp size={13} /> : <ChevronDown size={13} />)}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? <tr><td colSpan={columns.length} style={{ textAlign: "center", padding: 40 }}>{emptyMsg || "لا توجد بيانات."}</td></tr> : filtered.map((row) => <tr key={row.id}>{columns.map((c) => <td key={c.key}>{c.render ? c.render(row) : getVal(row, c)}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Modal({ title, onClose, children, wide }) {
  return (
    <div className="modal-back no-print" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="card modal" style={wide ? { maxWidth: 720 } : undefined}>
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid var(--line)" }}>
          <h3 className="heading" style={{ margin: 0, fontSize: 17 }}>{title}</h3>
          <button className="icon-btn" style={{ marginInlineStart: "auto" }} onClick={onClose}><X size={18} /></button>
        </div>
        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children, error }) {
  return <div><label className="label">{label}</label>{children}
    {error && <div style={{ color: "#e5484d", fontSize: 12, fontWeight: 700, marginTop: 4 }}>{error}</div>}
  </div>;
}
function Grid2({ children }) { return <div className="grid2">{children}</div>; }
function SectionHead({ title, onAdd }) { return <div className="no-print" style={{ display: "flex", alignItems: "center", marginBottom: 16 }}><button className="btn btn-primary" style={{ marginInlineStart: "auto" }} onClick={onAdd}><Plus size={16} /> إضافة</button></div>; }
function FormActions({ onSave, onClose }) { return <div style={{ display: "flex", gap: 10, marginTop: 20 }}><button className="btn btn-primary" onClick={onSave}><Check size={16} /> حفظ</button><button className="btn btn-ghost" onClick={onClose}>إلغاء</button></div>; }
function FormError({ error }) {
  if (!error) return null;
  return <div style={{ background: "#e5484d11", border: "1px solid #e5484d33", borderRadius: 10, padding: "10px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8, color: "#e5484d", fontSize: 13, fontWeight: 700 }}>
    <AlertTriangle size={16} /> {error}
  </div>;
}

function useConfirm() {
  const [state, setState] = useState(null);
  const confirm = (msg, cb) => setState({ msg, cb });
  const node = state ? (
    <Modal title="تأكيد" onClose={() => setState(null)}>
      <p style={{ margin: "0 0 20px", fontSize: 15 }}>{state.msg}</p>
      <div style={{ display: "flex", gap: 10 }}><button className="btn btn-danger" onClick={() => { state.cb(); setState(null); }}>نعم، متابعة</button><button className="btn btn-ghost" onClick={() => setState(null)}>إلغاء</button></div>
    </Modal>
  ) : null;
  return { confirm, node };
}

/* ============================================================
   صفحة الموظفين
   ============================================================ */
function Employees() {
  const { employees, persist, toast, log, mine, session, users, isAdmin } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const [fService, setFService] = useState("");

  const visible = useMemo(() => mine(employees), [employees, mine]);
  const services = useMemo(() => [...new Set(visible.map((e) => e.service).filter(Boolean))], [visible]);
  const rows = useMemo(() => visible.filter((e) => !fService || e.service === fService), [visible, fService]);

  const save = (data) => {
    if (modal.mode === "add") { persist.employees([{ ...data, completed: false, id: uid(), createdAt: now(), createdBy: session.id }, ...employees]); log("إضافة", "موظف", data.workplace); toast("تمت إضافة الموظف"); }
    else { persist.employees(employees.map((e) => (e.id === modal.data.id ? { ...e, ...data } : e))); log("تعديل", "موظف", data.workplace); toast("تم التعديل"); }
    setModal(null);
  };
  const del = (row) => confirm("حذف «" + row.workplace + "»؟", () => { persist.employees(employees.filter((e) => e.id !== row.id)); log("حذف", "موظف", row.workplace); toast("تم الحذف", "error"); });

  const toggleCompleted = (row) => {
    if (!isAdmin) return;
    const newVal = !row.completed;
    persist.employees(employees.map((e) => (e.id === row.id ? { ...e, completed: newVal } : e)));
    log(newVal ? "تسديد" : "إلغاء تسديد", "موظف", row.workplace + " — " + (users.find((u) => u.id === row.createdBy)?.name || ""));
    toast(newVal ? "تم التسديد ✓" : "تم إلغاء التسديد");
  };

  const columns = [
    { key: "workplace", label: "مكان العمل" }, { key: "shop", label: "اسم المحل" }, { key: "service", label: "نوع الخدمة" },
    { key: "labor", label: "تكلفة اليد العاملة", type: "num", render: (r) => money(r.labor) },
    { key: "salaryExp", label: " المصروفات", type: "num", render: (r) => money(r.salaryExp) },
    { key: "createdBy", label: "الموظف", render: (r) => users.find((u) => u.id === r.createdBy)?.name || "—" },
    { key: "completed", label: "خالص", noSort: true, render: (r) => (
      <span onClick={() => toggleCompleted(r)} style={{ cursor: isAdmin ? "pointer" : "default", display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 99, fontSize: 13, fontWeight: 800,
        background: r.completed ? "#2e9e5b22" : "#e5484d22", color: r.completed ? "#2e9e5b" : "#e5484d",
        userSelect: "none", transition: ".15s" }}>
        {r.completed ? "✓ تم التسديد" : "✕ لم يُسدد"}
      </span>
    )},
    { key: "act", label: "إجراءات", noSort: true, render: (r) => (<div style={{ display: "flex", gap: 6 }}><button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button><button className="icon-btn" onClick={() => del(r)}><Trash2 size={15} /></button></div>) },
  ];

  return (
    <div>
      <SectionHead title="الموظفون" onAdd={() => setModal({ mode: "add", data: {} })} />
      <DataTable title="الموظفون" columns={columns} rows={rows} filters={<Field label="نوع الخدمة"><select className="select" value={fService} onChange={(e) => setFService(e.target.value)}><option value="">الكل</option>{services.map((s) => <option key={s} value={s}>{s}</option>)}</select></Field>} />
      {modal && <Modal title={modal.mode === "add" ? "إضافة موظف" : "تعديل"} onClose={() => setModal(null)}><EmployeeForm data={modal.data} onSave={save} onClose={() => setModal(null)} /></Modal>}
      {node}
    </div>
  );
}
function EmployeeForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ workplace: "", shop: "", service: "", labor: "", salaryExp: "", notes: "", ...data });
  const [formErr, setFormErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const handleSave = () => {
    const err = validateForm([
      { value: f.workplace, label: "مكان العمل", min: 2 },
      { value: f.shop, label: "اسم المحل", min: 2 },
      { value: f.service, label: "نوع الخدمة" },
    ]);
    if (err) { setFormErr(err); return; }
    onSave(f);
  };
  return (<div>
    <FormError error={formErr} />
    <Grid2><Field label="مكان العمل"><input className="input" value={f.workplace} onChange={set("workplace")} /></Field><Field label="المحل"><input className="input" value={f.shop} onChange={set("shop")} /></Field></Grid2>
    <Field label="نوع الخدمة"><input className="input" value={f.service} onChange={set("service")} /></Field>
    <Grid2><Field label="تكلفة العمالة"><input className="input" type="number" value={f.labor} onChange={set("labor")} /></Field><Field label="مصروفات"><input className="input" type="number" value={f.salaryExp} onChange={set("salaryExp")} /></Field></Grid2>
    <FormActions onSave={handleSave} onClose={onClose} />
  </div>);
}

/* ============================================================
   صفحة الزبائن
   ============================================================ */
function Customers() {
  const { customers, persist, toast, log, mine, session, users } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const visible = useMemo(() => mine(customers), [customers, mine]);
  const save = (data) => {
    const rec = { ...data, remaining: (Number(data.materials)||0) + (Number(data.invoiceValue)||0) + (Number(data.design)||0) + (Number(data.labor)||0) - (Number(data.deposit)||0) };
    if (modal.mode === "add") { persist.customers([{ ...rec, id: uid(), createdAt: now(), createdBy: session.id }, ...customers]); log("إضافة", "زبون", data.name); toast("تمت الإضافة"); }
    else { persist.customers(customers.map((c) => (c.id === modal.data.id ? { ...c, ...rec } : c))); log("تعديل", "زبون", data.name); toast("تم التعديل"); }
    setModal(null);
  };
  const columns = [
    { key: "name", label: "اسم الزبون" }, { key: "phone", label: "رقم الهاتف" }, { key: "workType", label: "نوع العمل" },
    { key: "deposit", label: "العربون", render: (r) => money(r.deposit) },
    { key: "remaining", label: "الباقي", render: (r) => <b style={{ color: r.remaining > 0 ? "#e5484d" : "#2e9e5b" }}>{money(r.remaining)}</b> },
    { key: "createdBy", label: "الموظف", render: (r) => users.find((u) => u.id === r.createdBy)?.name || "—" },
    { key: "act", label: "إجراءات", noSort: true, render: (r) => (<div style={{ display: "flex", gap: 6 }}><button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button><button className="icon-btn" onClick={() => confirm("حذف؟", () => persist.customers(customers.filter((c) => c.id !== r.id)))}><Trash2 size={15} /></button></div>) }
  ];
  return (<div><SectionHead onAdd={() => setModal({ mode: "add", data: {} })} /><DataTable columns={columns} rows={visible} />{modal && <Modal title="بيانات الزبون" onClose={() => setModal(null)} wide><CustomerForm data={modal.data} onSave={save} onClose={() => setModal(null)} /></Modal>}{node}</div>);
}
function CustomerForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ name: "", phone: "", workType: "", materials: "", invoiceValue: "", design: "", labor: "", deposit: "", invoiceNumber: "", notes: "", ...data });
  const [formErr, setFormErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const handleSave = () => {
    const err = validateForm([
      { value: f.name, label: "اسم الزبون", min: 2 },
      { value: f.workType, label: "نوع العمل" },
    ]);
    if (err) { setFormErr(err); return; }
    onSave(f);
  };
  return (<div>
    <FormError error={formErr} />
    <Grid2><Field label="اسم الزبون"><input className="input" value={f.name} onChange={set("name")} /></Field><Field label="رقم الهاتف"><input className="input" value={f.phone} onChange={set("phone")} placeholder="05XXXXXXXX" /></Field></Grid2>
    <Field label="نوع العمل"><input className="input" value={f.workType} onChange={set("workType")} /></Field>
    <Grid2><Field label="تكلفة المواد"><input className="input" type="number" value={f.materials} onChange={set("materials")} /></Field><Field label="قيمة الفاتورة"><input className="input" type="number" value={f.invoiceValue} onChange={set("invoiceValue")} /></Field></Grid2>
    <Grid2><Field label="تكلفة التصميم"><input className="input" type="number" value={f.design} onChange={set("design")} /></Field><Field label="رقم الفاتورة"><input className="input" value={f.invoiceNumber} onChange={set("invoiceNumber")} /></Field></Grid2>
    <Grid2><Field label="تكلفة العمالة"><input className="input" type="number" value={f.labor} onChange={set("labor")} /></Field><Field label="العربون"><input className="input" type="number" value={f.deposit} onChange={set("deposit")} /></Field></Grid2>
    <FormActions onSave={handleSave} onClose={onClose} />
  </div>);
}

/* ============================================================
   صفحة الموردين
   ============================================================ */
function Suppliers() {
  const { suppliers, persist, toast, log, mine, session, users } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const visible = useMemo(() => mine(suppliers), [suppliers, mine]);
  const save = (data) => {
    const rec = { ...data, remaining: (Number(data.invoice)||0) - (Number(data.paid)||0) };
    if (modal.mode === "add") { persist.suppliers([{ ...rec, id: uid(), createdAt: now(), createdBy: session.id }, ...suppliers]); log("إضافة", "مورد", data.name); toast("تم الإضافة"); }
    else { persist.suppliers(suppliers.map((s) => (s.id === modal.data.id ? { ...s, ...rec } : s))); log("تعديل", "مورد", data.name); toast("تم التعديل"); }
    setModal(null);
  };
  const columns = [
    { key: "name", label: "اسم المورد" }, { key: "phone", label: "رقم الهاتف" }, { key: "goods", label: "نوع البضاعة" },
    { key: "remaining", label: "المتبقي", render: (r) => <b style={{ color: r.remaining > 0 ? "#e5484d" : "#2e9e5b" }}>{money(r.remaining)}</b> },
    { key: "createdBy", label: "الموظف", render: (r) => users.find((u) => u.id === r.createdBy)?.name || "—" },
    { key: "act", label: "إجراءات", noSort: true, render: (r) => (<div style={{ display: "flex", gap: 6 }}><button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button><button className="icon-btn" onClick={() => confirm("حذف؟", () => persist.suppliers(suppliers.filter((s) => s.id !== r.id)))}><Trash2 size={15} /></button></div>) }
  ];
  return (<div><SectionHead onAdd={() => setModal({ mode: "add", data: {} })} /><DataTable columns={columns} rows={visible} />{modal && <Modal title="المورد" onClose={() => setModal(null)}><SupplierForm data={modal.data} onSave={save} onClose={() => setModal(null)} /></Modal>}{node}</div>);
}
function SupplierForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ name: "", phone: "", goods: "", invoice: "", paid: "", notes: "", ...data });
  const [formErr, setFormErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const handleSave = () => {
    const err = validateForm([
      { value: f.name, label: "اسم المورد", min: 2 },
      { value: f.goods, label: "نوع البضاعة" },
    ]);
    if (err) { setFormErr(err); return; }
    onSave(f);
  };
  return (<div>
    <FormError error={formErr} />
    <Grid2><Field label="اسم المورد"><input className="input" value={f.name} onChange={set("name")} /></Field><Field label="رقم الهاتف"><input className="input" value={f.phone} onChange={set("phone")} placeholder="05XXXXXXXX" /></Field></Grid2>
    <Field label="البضاعة"><input className="input" value={f.goods} onChange={set("goods")} /></Field>
    <Grid2><Field label="قيمة الفاتورة"><input className="input" type="number" value={f.invoice} onChange={set("invoice")} /></Field><Field label="المدفوع"><input className="input" type="number" value={f.paid} onChange={set("paid")} /></Field></Grid2>
    <FormActions onSave={handleSave} onClose={onClose} />
  </div>);
}

/* ============================================================
   لوحة التحكم
   ============================================================ */
function Dashboard() {
  const { employees, customers, suppliers, mine, users, isAdmin } = useApp();
  const [view, setView] = useState("main");
  const [selectedUser, setSelectedUser] = useState(null);

  const myEmployees = useMemo(() => mine(employees), [employees, mine]);
  const myCustomers = useMemo(() => mine(customers), [customers, mine]);
  const mySuppliers = useMemo(() => mine(suppliers), [suppliers, mine]);

  const totalLabor = myEmployees.reduce((a, e) => a + (Number(e.labor) || 0), 0);
  const totalSalaryExp = myEmployees.reduce((a, e) => a + (Number(e.salaryExp) || 0), 0);
  const totalDeposit = myCustomers.reduce((a, c) => a + (Number(c.deposit) || 0), 0);
  const totalRemaining = myCustomers.reduce((a, c) => a + (Number(c.remaining) || 0), 0);
  const totalMaterials = myCustomers.reduce((a, c) => a + (Number(c.materials) || 0), 0);
  const totalInvoicesVal = myCustomers.reduce((a, c) => a + (Number(c.invoiceValue) || 0), 0);
  const totalSupplierInvoices = mySuppliers.reduce((a, s) => a + (Number(s.invoice) || 0), 0);

  const barData = [
    { name: "اليد العاملة", value: totalLabor },
    { name: "العربون", value: totalDeposit },
    { name: "المتبقي", value: totalRemaining },
    { name: "المواد", value: totalMaterials },
    { name: "فواتير الزبائن", value: totalInvoicesVal },
    { name: "فواتير الموردين", value: totalSupplierInvoices },
  ];

  const statCard = (icon, label, value, color, bg, onClick) => (
    <div className="card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 13, cursor: onClick ? "pointer" : "default", transition: ".15s" }}
      onClick={onClick} onMouseEnter={(e) => onClick && (e.currentTarget.style.borderColor = "var(--brand)")} onMouseLeave={(e) => onClick && (e.currentTarget.style.borderColor = "")}>
      <div style={{ width: 46, height: 46, borderRadius: 12, background: bg, color: color, display: "grid", placeItems: "center", flexShrink: 0 }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700, whiteSpace: "nowrap" }}>{label}</div>
        <div className="heading" style={{ fontSize: 19, fontWeight: 800 }}>{value}</div>
      </div>
    </div>
  );

  if (view === "employee-detail" && selectedUser) {
    return <EmployeeDetailView user={selectedUser} onBack={() => setView("employees-list")} />;
  }

  if (view === "employees-list") {
    return <EmployeesListView onSelect={(u) => { setSelectedUser(u); setView("employee-detail"); }} onBack={() => setView("main")} />;
  }

  return (
    <div style={{ display: "grid", gap: 18 }}>
      <div className="grid-stats">
        {statCard(<Users size={22} />, "عدد الموظفين", myEmployees.length, "#5b74b8", "#5b74b822", () => setView("employees-list"))}
        {statCard(<UserRound size={22} />, "عدد الزبائن", myCustomers.length, "#2e9e5b", "#2e9e5b22")}
        {statCard(<Truck size={22} />, "عدد الموردين", mySuppliers.length, "#d98324", "#d9832422")}
      </div>
      <div className="grid-stats">
        {statCard(<Wallet size={22} />, "اجمالي اليد العاملة", money(totalLabor), "#5b74b8", "#5b74b822")}
        {statCard(<Receipt size={22} />, "اجمالي مصروفات الموظفين", money(totalSalaryExp), "#8b5cf6", "#8b5cf622")}
        {statCard(<TrendingUp size={22} />, "اجمالي العربون", money(totalDeposit), "#2e9e5b", "#2e9e5b22")}
        {statCard(<AlertTriangle size={22} />, "اجمالي المتبقي", money(totalRemaining), "#e5484d", "#e5484d22")}
        {statCard(<Package size={22} />, "اجمالي تكلفة المواد", money(totalMaterials), "#d98324", "#d9832422")}
        {statCard(<FileText size={22} />, "اجمالي فواتير الزبائن", money(totalInvoicesVal), "#0ea5e9", "#0ea5e922")}
        {statCard(<Truck size={22} />, "اجمالي فواتير الموردين", money(totalSupplierInvoices), "#e5484d", "#e5484d22")}
      </div>
      <div className="card" style={{ padding: 18 }}>
        <h3 className="heading" style={{ margin: "0 0 14px", fontSize: 16 }}>ملخص التكاليف والإيرادات</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}><CartesianGrid strokeDasharray="3 3" stroke="var(--line)" /><XAxis dataKey="name" tick={{ fill: "var(--muted)", fontSize: 11 }} /><YAxis tick={{ fill: "var(--muted)", fontSize: 11 }} /><Tooltip contentStyle={{ direction: "rtl", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10 }} /><Bar dataKey="value" fill={BRAND} radius={[8, 8, 0, 0]} /></BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ============================================================
   صفحة قائمة الموظفين (من لوحة التحكم)
   ============================================================ */
function EmployeesListView({ onSelect, onBack }) {
  const { employees, users } = useApp();

  const employeeUsers = useMemo(() => {
    const uniqueIds = [...new Set(employees.map((e) => e.createdBy).filter(Boolean))];
    return uniqueIds.map((id) => {
      const user = users.find((u) => u.id === id);
      const empRecords = employees.filter((e) => e.createdBy === id);
      const totalLabor = empRecords.reduce((a, e) => a + (Number(e.labor) || 0), 0);
      const totalExp = empRecords.reduce((a, e) => a + (Number(e.salaryExp) || 0), 0);
      const completedCount = empRecords.filter((e) => e.completed).length;
      return { user, recordCount: empRecords.length, totalLabor, totalExp, completedCount };
    }).filter((e) => e.user);
  }, [employees, users]);

  const columns = [
    { key: "name", label: "اسم الموظف", render: (r) => <span style={{ fontWeight: 700 }}>{r.user.name}</span> },
    { key: "recordCount", label: "عدد الأعمال", type: "num" },
    { key: "totalLabor", label: "اجمالي اليد العاملة", type: "num", render: (r) => money(r.totalLabor) },
    { key: "totalExp", label: "اجمالي المصروفات", type: "num", render: (r) => money(r.totalExp) },
    { key: "completedCount", label: "تم التسديد", type: "num", render: (r) => <span style={{ color: "#2e9e5b", fontWeight: 700 }}>{r.completedCount} / {r.recordCount}</span> },
    { key: "act", label: "عرض التفاصيل", noSort: true, render: (r) => (
      <button className="btn btn-sm btn-primary" onClick={(e) => { e.stopPropagation(); onSelect(r.user); }}>
        <Eye size={14} /> عرض الأعمال
      </button>
    ) },
  ];

  return (
    <div>
      <div className="no-print" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <button className="btn btn-ghost" onClick={onBack}><RotateCcw size={16} /> رجوع</button>
        <h3 className="heading" style={{ margin: 0, fontSize: 17 }}>قائمة الموظفين</h3>
      </div>
      <DataTable columns={columns} rows={employeeUsers} emptyMsg="لا يوجد موظفون." />
    </div>
  );
}

/* ============================================================
   صفحة تفاصيل أعمال موظف محدد
   ============================================================ */
function EmployeeDetailView({ user, onBack }) {
  const { employees, isAdmin, persist, toast, log, users } = useApp();

  const myRecords = useMemo(() => employees.filter((e) => e.createdBy === user.id), [employees, user]);
  const totalLabor = myRecords.reduce((a, e) => a + (Number(e.labor) || 0), 0);
  const totalExp = myRecords.reduce((a, e) => a + (Number(e.salaryExp) || 0), 0);
  const completedCount = myRecords.filter((e) => e.completed).length;

  const toggleCompleted = (row) => {
    if (!isAdmin) return;
    const newVal = !row.completed;
    persist.employees(employees.map((e) => (e.id === row.id ? { ...e, completed: newVal } : e)));
    log(newVal ? "تسديد" : "إلغاء تسديد", "موظف", row.workplace + " — " + user.name);
    toast(newVal ? "تم التسديد ✓" : "تم إلغاء التسديد");
  };

  const columns = [
    { key: "completed", label: "خالص", noSort: true, render: (r) => (
      <span onClick={() => toggleCompleted(r)} style={{ cursor: isAdmin ? "pointer" : "default", display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 99, fontSize: 13, fontWeight: 800,
        background: r.completed ? "#2e9e5b22" : "#e5484d22", color: r.completed ? "#2e9e5b" : "#e5484d",
        userSelect: "none", transition: ".15s" }}>
        {r.completed ? "✓ تم التسديد" : "✕ لم يُسدد"}
      </span>
    )},
    { key: "workplace", label: "مكان العمل" }, { key: "shop", label: "اسم المحل" }, { key: "service", label: "نوع الخدمة" },
    { key: "labor", label: "تكلفة اليد العاملة", type: "num", render: (r) => money(r.labor) },
    { key: "salaryExp", label: " المصروفات", type: "num", render: (r) => money(r.salaryExp) },
    { key: "createdAt", label: "التاريخ", render: (r) => fmtDate(r.createdAt) },
  ];

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="no-print" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button className="btn btn-ghost" onClick={onBack}><RotateCcw size={16} /> رجوع</button>
        <Avatar user={user} size={36} />
        <div>
          <h3 className="heading" style={{ margin: 0, fontSize: 17 }}>{user.name}</h3>
          <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700 }}>اسم المستخدم: {user.username}</div>
        </div>
      </div>
      <div className="grid-stats">
        <div className="card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#5b74b822", color: "#5b74b8", display: "grid", placeItems: "center" }}><ClipboardList size={18} /></div>
          <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>عدد الأعمال</div><div className="heading" style={{ fontSize: 18, fontWeight: 800 }}>{myRecords.length}</div></div>
        </div>
        <div className="card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#2e9e5b22", color: "#2e9e5b", display: "grid", placeItems: "center" }}><Check size={18} /></div>
          <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>تم التسديد</div><div className="heading" style={{ fontSize: 18, fontWeight: 800, color: "#2e9e5b" }}>{completedCount} / {myRecords.length}</div></div>
        </div>
        <div className="card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#5b74b822", color: "#5b74b8", display: "grid", placeItems: "center" }}><Wallet size={18} /></div>
          <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>اجمالي اليد العاملة</div><div className="heading" style={{ fontSize: 18, fontWeight: 800 }}>{money(totalLabor)}</div></div>
        </div>
        <div className="card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#8b5cf622", color: "#8b5cf6", display: "grid", placeItems: "center" }}><Receipt size={18} /></div>
          <div><div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>اجمالي المصروفات</div><div className="heading" style={{ fontSize: 18, fontWeight: 800 }}>{money(totalExp)}</div></div>
        </div>
      </div>
      <DataTable columns={columns} rows={myRecords} emptyMsg="لا توجد أعمال مسجلة لهذا الموظف." />
    </div>
  );
}

/* ============================================================
   إدارة المستخدمين
   ============================================================ */
function UsersAdmin() {
  const { users, roles, persist, toast, log, session } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();

  const save = async (data) => {
    const uname = (data.username || "").trim();
    if (!data.name || !uname) return toast("الاسم واسم المستخدم مطلوبان", "error");
    if (data.name.trim().length < 2) return toast("الاسم يجب أن يكون حرفين على الأقل", "error");
    if (uname.length < 3) return toast("اسم المستخدم يجب أن يكون 3 أحرف على الأقل", "error");
    const dup = users.find((u) => u.username.trim().toLowerCase() === uname.toLowerCase() && u.id !== (modal.data && modal.data.id));
    if (dup) return toast("اسم المستخدم مستخدم بالفعل", "error");
    if (modal.mode === "add") {
      if (!data.pwd) return toast("كلمة المرور مطلوبة", "error");
      if (data.pwd.length < 6) return toast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "error");
      const hashedPwd = await hashPwd(data.pwd);
      const rec = { id: uid(), name: data.name, username: uname, pwd: hashedPwd, roleId: data.roleId || "employee", active: true, avatar: "", lastLogin: null, createdAt: now() };
      persist.users([rec, ...users]);
      log("إضافة", "مستخدم", uname);
      toast("تمت إضافة المستخدم");
    } else {
      let updateFields = { name: data.name, username: uname, roleId: data.roleId };
      if (data.pwd) {
        if (data.pwd.length < 6) return toast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "error");
        updateFields.pwd = await hashPwd(data.pwd);
      }
      const updated = users.map((u) => u.id === modal.data.id ? { ...u, ...updateFields } : u);
      persist.users(updated);
      log("تعديل", "مستخدم", uname);
      toast("تم التعديل");
    }
    setModal(null);
  };

  const toggleActive = (row) => {
    if (row.id === session.id) return toast("لا يمكنك إيقاف حسابك الحالي", "error");
    persist.users(users.map((u) => (u.id === row.id ? { ...u, active: !u.active } : u)));
    toast(row.active ? "تم إيقاف الحساب" : "تم تفعيل الحساب");
  };

  const del = (row) => {
    if (row.id === session.id) return toast("لا يمكنك حذف حسابك الحالي", "error");
    confirm("حذف المستخدم «" + row.name + "»؟", () => {
      persist.users(users.filter((u) => u.id !== row.id));
      log("حذف", "مستخدم", row.name);
      toast("تم الحذف", "error");
    });
  };

  const columns = [
    { key: "name", label: "الاسم" },
    { key: "username", label: "اسم المستخدم" },
    { key: "roleId", label: "الصلاحية", render: (r) => roles.find((x) => x.id === r.roleId)?.name || r.roleId },
    { key: "active", label: "الحالة", render: (r) => (
        <span className="badge" style={{ background: r.active ? "#2e9e5b22" : "#e5484d22", color: r.active ? "#2e9e5b" : "#e5484d" }}>
          {r.active ? "مفعّل" : "موقوف"}
        </span>
      ) },
    { key: "act", label: "إجراءات", noSort: true, render: (r) => (
        <div style={{ display: "flex", gap: 6 }}>
          <button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button>
          <button className="icon-btn" onClick={() => toggleActive(r)}><Power size={15} /></button>
          <button className="icon-btn" onClick={() => del(r)}><Trash2 size={15} /></button>
        </div>
      ) },
  ];

  return (
    <div>
      <SectionHead onAdd={() => setModal({ mode: "add", data: {} })} />
      <DataTable columns={columns} rows={users} />
      {modal && (
        <Modal title={modal.mode === "add" ? "إضافة مستخدم" : "تعديل مستخدم"} onClose={() => setModal(null)}>
          <UserForm data={modal.data} onSave={save} onClose={() => setModal(null)} />
        </Modal>
      )}
      {node}
    </div>
  );
}

function UserForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ name: "", username: "", pwd: "", roleId: "employee", ...data });
  const [show, setShow] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const isEdit = !!data.id;
  return (
    <div>
      <Grid2>
        <Field label="الاسم"><input className="input" value={f.name} onChange={set("name")} /></Field>
        <Field label="اسم المستخدم"><input className="input" value={f.username} onChange={set("username")} /></Field>
      </Grid2>
      <div style={{ marginTop: 14 }}>
        <Field label={isEdit ? "كلمة مرور جديدة (اتركها فارغة لعدم التغيير)" : "كلمة المرور (6 أحرف على الأقل)"}>
          <div style={{ position: "relative" }}>
            <input className="input" type={show ? "text" : "password"} value={f.pwd} onChange={set("pwd")}
              placeholder={isEdit ? "••••••••" : ""} style={{ paddingLeft: 42 }} />
            <button className="icon-btn" type="button" onClick={() => setShow(!show)}
              style={{ position: "absolute", left: 5, top: 4, width: 32, height: 32, border: "none", background: "none" }}>
              {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </Field>
      </div>
      <div style={{ marginTop: 14 }}>
        <Field label="الصلاحية">
          <select className="select" value={f.roleId} onChange={set("roleId")}>
            <option value="admin">مدير</option>
            <option value="employee">موظف</option>
          </select>
        </Field>
      </div>
      <FormActions onSave={() => onSave(f)} onClose={onClose} />
    </div>
  );
}

/* ============================================================
   سجل العمليات
   ============================================================ */
function AuditLog() {
  const { audit } = useApp();
  const columns = [
    { key: "user", label: "المستخدم" }, { key: "action", label: "العملية" },
    { key: "entity", label: "العنصر" }, { key: "detail", label: "التفاصيل" },
    { key: "at", label: "الوقت", render: (r) => fmtDate(r.at) }
  ];
  return <DataTable columns={columns} rows={audit} />;
}

/* ============================================================
   النسخ الاحتياطي
   ============================================================ */
function Backup() {
  const { users, roles, employees, customers, suppliers, audit, persist, toast, log } = useApp();
  const fileRef = React.useRef(null);

  const backupAll = () => {
    const data = { version: "2.0", exportedAt: now(), users, roles, employees, customers, suppliers, audit };
    exportJSON(data, "aseel-backup-" + new Date().toISOString().slice(0, 10));
    log("نسخ احتياطي", "النظام", "تصدير كامل");
    toast("تم تصدير النسخة الاحتياطية بنجاح");
  };

  const backupData = (label, data, filename) => {
    exportJSON(data, filename + "-" + new Date().toISOString().slice(0, 10));
    log("نسخ احتياطي", label, "تصدير");
    toast("تم تصدير " + label);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    importJSON(file, (data) => {
      if (!data) return toast("ملف غير صالح", "error");
      if (data.employees) { persist.employees(data.employees); }
      if (data.customers) { persist.customers(data.customers); }
      if (data.suppliers) { persist.suppliers(data.suppliers); }
      if (data.users) { persist.users(data.users); }
      if (data.roles) { persist.roles(data.roles); }
      log("استيراد", "النظام", "استيراد من ملف");
      toast("تم الاستيراد بنجاح");
    });
    e.target.value = "";
  };

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div className="card" style={{ padding: 20 }}>
        <h3 className="heading" style={{ margin: "0 0 14px", fontSize: 16 }}>نسخة احتياطية كاملة</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 14px" }}>تصدير جميع البيانات (المستخدمين، الموظفين، الزبائن، الموردين، السجل) كملف JSON واحد.</p>
        <button className="btn btn-primary" onClick={backupAll}><Download size={16} /> تصدير نسخة احتياطية كاملة</button>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <h3 className="heading" style={{ margin: "0 0 14px", fontSize: 16 }}>تصدير أقسام محددة</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button className="btn btn-ghost" onClick={() => backupData("الموظفين", employees, "employees")}><Download size={15} /> الموظفون</button>
          <button className="btn btn-ghost" onClick={() => backupData("الزبائن", customers, "customers")}><Download size={15} /> الزبائن</button>
          <button className="btn btn-ghost" onClick={() => backupData("الموردين", suppliers, "suppliers")}><Download size={15} /> الموردون</button>
          <button className="btn btn-ghost" onClick={() => backupData("المستخدمين", users, "users")}><Download size={15} /> المستخدمون</button>
          <button className="btn btn-ghost" onClick={() => backupData("السجل", audit, "audit")}><Download size={15} /> سجل العمليات</button>
        </div>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <h3 className="heading" style={{ margin: "0 0 14px", fontSize: 16 }}>استيراد بيانات</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 14px" }}>استيراد بيانات من ملف JSON نسخة احتياطية سابقة. سيتم تحديث جميع الأقسام الموجودة.</p>
        <input ref={fileRef} type="file" accept=".json" style={{ display: "none" }} onChange={handleImport} />
        <button className="btn btn-ghost" onClick={() => fileRef.current.click()}><Upload size={16} /> استيراد من ملف</button>
      </div>
    </div>
  );
}

/* ============================================================
   الملف الشخصي
   ============================================================ */
function Profile() {
  const { session, persist, toast } = useApp();
  const [name, setName] = useState(session.name);
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!name.trim() || name.trim().length < 2) return toast("الاسم يجب أن يكون حرفين على الأقل", "error");
    setSaving(true);
    const updates = { name: name.trim() };
    if (pwd) {
      if (pwd.length < 6) { toast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "error"); setSaving(false); return; }
      updates.pwd = await hashPwd(pwd);
    }
    const users = await DB.get("users", "main", []);
    const updated = users.map((u) => u.id === session.id ? { ...u, ...updates } : u);
    persist.users(updated);
    toast("تم تحديث الملف الشخصي");
    setPwd(""); setSaving(false);
  };

  return (
    <div className="card" style={{ padding: 24, maxWidth: 500 }}>
      <h3 className="heading" style={{ margin: "0 0 20px" }}>الملف الشخصي</h3>
      <Field label="الاسم"><input className="input" value={name} onChange={(e) => setName(e.target.value)} /></Field>
      <div style={{ marginTop: 14 }}>
        <Field label="كلمة مرور جديدة (اتركها فارغة لعدم التغيير)">
          <div style={{ position: "relative" }}>
            <input className="input" type={show ? "text" : "password"} value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="••••••••" style={{ paddingLeft: 42 }} />
            <button className="icon-btn" onClick={() => setShow(!show)} style={{ position: "absolute", left: 5, top: 4, width: 32, height: 32, border: "none", background: "none" }}>
              {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </Field>
      </div>
      <div style={{ marginTop: 14 }}>
        <div className="label">الصلاحية</div>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{session.roleId === "admin" ? "مدير" : "موظف"}</div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button className="btn btn-primary" onClick={save} disabled={saving}><Check size={16} /> {saving ? "جاري الحفظ…" : "حفظ"}</button>
      </div>
    </div>
  );
}

/* ============================================================
   الإشعارات
   ============================================================ */
function ToastStack({ toasts }) {
  return (
    <div className="no-print" style={{ position: "fixed", bottom: 20, insetInlineStart: 20, display: "flex", flexDirection: "column", gap: 10, zIndex: 100 }}>
      {toasts.map((t) => (<div key={t.id} style={{ background: "var(--surface)", border: "1px solid " + (t.type === "error" ? "#e5484d" : "#2e9e5b"), borderRadius: 12, padding: "12px 18px", boxShadow: "var(--shadow)", fontWeight: 700, fontSize: 14 }}>{t.msg}</div>))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));