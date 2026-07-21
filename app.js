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

var LayoutDashboard = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('rect', { width: 7, height: 9, x: 3, y: 3, rx: 1 }), React.createElement('rect', { width: 7, height: 5, x: 14, y: 3, rx: 1 }), React.createElement('rect', { width: 7, height: 9, x: 14, y: 12, rx: 1 }), React.createElement('rect', { width: 7, height: 5, x: 3, y: 16, rx: 1 })); };
var Users = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), React.createElement('path', { d: 'M16 3.128a4 4 0 0 1 0 7.744' }), React.createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), React.createElement('circle', { cx: 9, cy: 7, r: 4 })); };
var UserRound = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('circle', { cx: 12, cy: 8, r: 5 }), React.createElement('path', { d: 'M20 21a8 8 0 0 0-16 0' })); };
var Truck = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' }), React.createElement('path', { d: 'M15 18H9' }), React.createElement('path', { d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' }), React.createElement('circle', { cx: 17, cy: 18, r: 2 }), React.createElement('circle', { cx: 7, cy: 18, r: 2 })); };
var UserIcon = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }), React.createElement('circle', { cx: 12, cy: 7, r: 4 })); };
var LogOut = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'm16 17 5-5-5-5' }), React.createElement('path', { d: 'M21 12H9' }), React.createElement('path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' })); };
var Search = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'm21 21-4.34-4.34' }), React.createElement('circle', { cx: 11, cy: 11, r: 8 })); };
var Plus = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M5 12h14' }), React.createElement('path', { d: 'M12 5v14' })); };
var Pencil = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z' }), React.createElement('path', { d: 'm15 5 4 4' })); };
var Trash2 = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M10 11v6' }), React.createElement('path', { d: 'M14 11v6' }), React.createElement('path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6' }), React.createElement('path', { d: 'M3 6h18' }), React.createElement('path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' })); };
var Printer = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' }), React.createElement('path', { d: 'M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6' }), React.createElement('rect', { x: 6, y: 14, width: 12, height: 8, rx: 1 })); };
var FileText = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' }), React.createElement('path', { d: 'M14 2v5a1 1 0 0 0 1 1h5' }), React.createElement('path', { d: 'M10 9H8' }), React.createElement('path', { d: 'M16 13H8' }), React.createElement('path', { d: 'M16 17H8' })); };
var FileSpreadsheet = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' }), React.createElement('path', { d: 'M14 2v5a1 1 0 0 0 1 1h5' }), React.createElement('path', { d: 'M8 13h2' }), React.createElement('path', { d: 'M14 13h2' }), React.createElement('path', { d: 'M8 17h2' }), React.createElement('path', { d: 'M14 17h2' })); };
var Moon = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401' })); };
var Sun = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('circle', { cx: 12, cy: 12, r: 4 }), React.createElement('path', { d: 'M12 2v2' }), React.createElement('path', { d: 'M12 20v2' }), React.createElement('path', { d: 'm4.93 4.93 1.41 1.41' }), React.createElement('path', { d: 'm17.66 17.66 1.41 1.41' }), React.createElement('path', { d: 'M2 12h2' }), React.createElement('path', { d: 'M20 12h2' }), React.createElement('path', { d: 'm6.34 17.66-1.41 1.41' }), React.createElement('path', { d: 'm19.07 4.93-1.41 1.41' })); };
var Shield = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' })); };
var X = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M18 6 6 18' }), React.createElement('path', { d: 'm6 6 12 12' })); };
var Check = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M20 6 9 17l-5-5' })); };
var ChevronUp = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'm18 15-6-6-6 6' })); };
var ChevronDown = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'm6 9 6 6 6-6' })); };
var Filter = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z' })); };
var Save = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' }), React.createElement('path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7' }), React.createElement('path', { d: 'M7 3v4a1 1 0 0 0 1 1h7' })); };
var RotateCcw = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }), React.createElement('path', { d: 'M3 3v5h5' })); };
var Download = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M12 15V3' }), React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }), React.createElement('path', { d: 'm7 10 5 5 5-5' })); };
var Upload = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M12 3v12' }), React.createElement('path', { d: 'm17 8-5-5-5 5' }), React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' })); };
var Eye = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' }), React.createElement('circle', { cx: 12, cy: 12, r: 3 })); };
var EyeOff = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49' }), React.createElement('path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242' }), React.createElement('path', { d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143' }), React.createElement('path', { d: 'm2 2 20 20' })); };
var KeyRound = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z' }), React.createElement('circle', { cx: 16.5, cy: 7.5, r: 0.5, fill: 'currentColor' })); };
var Power = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M12 2v10' }), React.createElement('path', { d: 'M18.4 6.6a9 9 0 1 1-12.77.04' })); };
var Menu = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M4 5h16' }), React.createElement('path', { d: 'M4 12h16' }), React.createElement('path', { d: 'M4 19h16' })); };
var ClipboardList = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('rect', { width: 8, height: 4, x: 8, y: 2, rx: 1, ry: 1 }), React.createElement('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }), React.createElement('path', { d: 'M12 11h4' }), React.createElement('path', { d: 'M12 16h4' }), React.createElement('path', { d: 'M8 11h.01' }), React.createElement('path', { d: 'M8 16h.01' })); };
var TrendingUp = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M16 7h6v6' }), React.createElement('path', { d: 'm22 7-8.5 8.5-5-5L2 17' })); };
var Wallet = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' }), React.createElement('path', { d: 'M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' })); };
var Package = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z' }), React.createElement('path', { d: 'M12 22V12' }), React.createElement('polyline', { points: '3.29 7 12 12 20.71 7' }), React.createElement('path', { d: 'm7.5 4.27 9 5.15' })); };
var Receipt = function(props) { return React.createElement(Icon, { size: props.size }, React.createElement('path', { d: 'M12 17V7' }), React.createElement('path', { d: 'M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8' }), React.createElement('path', { d: 'M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z' })); };

/* ============================================================
   نظام الأصيل للخدمات الإعلانية - الدوال المساعدة وقاعدة البيانات
   ============================================================ */
const BRAND = "#283D74";
const BRAND_LIGHT = "#3C4F81";
const GREY = "#D1D3D4";

const DB = {
  async get(key, fallback) {
    try {
      if(!window._fs || !window._db) return fallback;
      const snap = await window._fs.getDoc(window._fs.doc(window._db, "appdata", key));
      if (snap.exists()) {
        const d = snap.data();
        return d && "v" in d ? d.v : fallback;
      }
      return fallback;
    } catch (e) {
      console.error("Firestore get error", key, e);
      return fallback;
    }
  },
  async set(key, value) {
    try {
      if(!window._fs || !window._db) return false;
      await window._fs.setDoc(window._fs.doc(window._db, "appdata", key), { v: value });
      return true;
    } catch (e) {
      console.error("Firestore set error", key, e);
      return false;
    }
  },
}

function hashPwd(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return "h" + (h >>> 0).toString(16);
}

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const now = () => new Date().toISOString();
const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleString("en-GB", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }) : "-";
const money = (n) => (Number(n) || 0).toLocaleString("en-US", { maximumFractionDigits: 2 });

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
  { id: "employee", name: "موظف", pages: ["dashboard", "employees", "customers", "suppliers"], locked: false },
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
      let u = await DB.get("users", null);
      let r = await DB.get("roles", null);
      if (!r) { r = DEFAULT_ROLES; await DB.set("roles", r); }
      if (!u) {
        u = [{
          id: uid(), username: "admin", name: "المدير العام",
          pwd: hashPwd("admin123"), roleId: "admin", active: true,
          avatar: "", lastLogin: null, createdAt: now(),
        }];
        await DB.set("users", u);
      }
      setUsers(u); setRoles(r);
      setEmployees(await DB.get("employees", []));
      setCustomers(await DB.get("customers", []));
      setSuppliers(await DB.get("suppliers", []));
      setAudit(await DB.get("audit", []));
      setTheme(await DB.get("theme", "light"));
      setLoaded(true); // هذا السطر هو الذي يزيل شاشة التحميل
    })();
  }, []);

  const persist = {
    users: (v) => { setUsers(v); DB.set("users", v); },
    roles: (v) => { setRoles(v); DB.set("roles", v); },
    employees: (v) => { setEmployees(v); DB.set("employees", v); },
    customers: (v) => { setCustomers(v); DB.set("customers", v); },
    suppliers: (v) => { setSuppliers(v); DB.set("suppliers", v); },
    audit: (v) => { setAudit(v); DB.set("audit", v); },
  };

  const toast = useCallback((msg, type = "success") => {
    const id = uid();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  const log = useCallback((action, entity, detail) => {
    const entry = { id: uid(), user: session?.name || "—", action, entity, detail, at: now() };
    setAudit((prev) => { const next = [entry, ...prev].slice(0, 1000); DB.set("audit", next); return next; });
  }, [session]);

  const toggleTheme = () => { const t = theme === "light" ? "dark" : "light"; setTheme(t); DB.set("theme", t); };

  const currentRole = useMemo(
    () => roles.find((r) => r.id === session?.roleId) || null,
    [roles, session]
  );

  const value = {
    theme, toggleTheme, session, setSession,
    users, roles, employees, customers, suppliers, audit,
    persist, toast, log, currentRole, setToasts,
  };

  if (!loaded) {
    return (
      <div dir="rtl" style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f1f3f8", fontFamily: "Tajawal, sans-serif" }}>
        <div style={{ color: BRAND, fontWeight: 700 }}>جاري التحميل المكونات…</div>
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
   مكونات النظام (تسجيل الدخول، القائمة، وغيرها)
   ============================================================ */
function Login() {
  const { users, persist, setSession, toast, roles } = useApp();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const submit = () => {
    setErr("");
    const found = users.find((x) => x.username.trim().toLowerCase() === u.trim().toLowerCase());
    if (!found) return setErr("اسم المستخدم غير موجود");
    if (!found.active) return setErr("هذا الحساب موقوف. راجع المدير");
    if (found.pwd !== hashPwd(p)) return setErr("كلمة المرور غير صحيحة");
    const updated = users.map((x) => (x.id === found.id ? { ...x, lastLogin: now() } : x));
    persist.users(updated);
    setSession({ ...found, lastLogin: now() });
    toast(`مرحباّ ${found.name}`);
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
        <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 14, padding: 12 }} onClick={submit}>
          تسجيل الدخول
        </button>
        <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 11.5, marginTop: 18, marginBottom: 0 }}>
          الدخول الأول: admin / admin123
        </p>
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

  const allowed = currentRole?.pages || [];
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
            <button className="icon-btn" style={{ marginInlineStart: "auto", flexShrink: 0 }} onClick={() => setMobileOpen(false)} aria-label="إغلاق القائمة"><X size={18} /></button>
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

function DataTable({ columns, rows, title, filters, exportName }) {
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
            {filtered.length === 0 ? <tr><td colSpan={columns.length} style={{ textAlign: "center", padding: 40 }}>لا توجد بيانات.</td></tr> : filtered.map((row) => <tr key={row.id}>{columns.map((c) => <td key={c.key}>{c.render ? c.render(row) : getVal(row, c)}</td>)}</tr>)}
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

function Field({ label, children }) { return <div><label className="label">{label}</label>{children}</div>; }
function Grid2({ children }) { return <div className="grid2">{children}</div>; }
function SectionHead({ title, onAdd }) { return <div className="no-print" style={{ display: "flex", alignItems: "center", marginBottom: 16 }}><button className="btn btn-primary" style={{ marginInlineStart: "auto" }} onClick={onAdd}><Plus size={16} /> إضافة</button></div>; }
function FormActions({ onSave, onClose }) { return <div style={{ display: "flex", gap: 10, marginTop: 20 }}><button className="btn btn-primary" onClick={onSave}><Check size={16} /> حفظ</button><button className="btn btn-ghost" onClick={onClose}>إلغاء</button></div>; }

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

function Employees() {
  const { employees, persist, toast, log } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const [fService, setFService] = useState("");

  const services = useMemo(() => [...new Set(employees.map((e) => e.service).filter(Boolean))], [employees]);
  const rows = useMemo(() => employees.filter((e) => !fService || e.service === fService), [employees, fService]);

  const save = (data) => {
    if (modal.mode === "add") { persist.employees([{ ...data, id: uid(), createdAt: now() }, ...employees]); log("إضافة", "موظف", data.workplace); toast("تمت إضافة الموظف"); }
    else { persist.employees(employees.map((e) => (e.id === modal.data.id ? { ...e, ...data } : e))); log("تعديل", "موظف", data.workplace); toast("تم التعديل"); }
    setModal(null);
  };
  const del = (row) => confirm(`حذف «${row.workplace}»؟`, () => { persist.employees(employees.filter((e) => e.id !== row.id)); log("حذف", "موظف", row.workplace); toast("تم الحذف", "error"); });

  const columns = [
    { key: "workplace", label: "مكان العمل" }, { key: "shop", label: "اسم المحل" }, { key: "service", label: "نوع الخدمة" },
    { key: "labor", label: "تكلفة اليد العاملة", type: "num", render: (r) => money(r.labor) },
    { key: "salaryExp", label: "مصروفات", type: "num", render: (r) => money(r.salaryExp) },
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
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (<div><Grid2><Field label="مكان العمل"><input className="input" value={f.workplace} onChange={set("workplace")} /></Field><Field label="المحل"><input className="input" value={f.shop} onChange={set("shop")} /></Field></Grid2><Field label="نوع الخدمة"><input className="input" value={f.service} onChange={set("service")} /></Field><Grid2><Field label="تكلفة العمالة"><input className="input" type="number" value={f.labor} onChange={set("labor")} /></Field><Field label="مصروفات"><input className="input" type="number" value={f.salaryExp} onChange={set("salaryExp")} /></Field></Grid2><FormActions onSave={() => onSave(f)} onClose={onClose} /></div>);
}

function Customers() {
  const { customers, persist, toast, log } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const save = (data) => {
    const rec = { ...data, remaining: (Number(data.materials)||0) + (Number(data.invoiceValue)||0) + (Number(data.design)||0) + (Number(data.labor)||0) - (Number(data.deposit)||0) };
    if (modal.mode === "add") { persist.customers([{ ...rec, id: uid(), createdAt: now() }, ...customers]); log("إضافة", "زبون", data.name); toast("تمت الإضافة"); }
    else { persist.customers(customers.map((c) => (c.id === modal.data.id ? { ...c, ...rec } : c))); log("تعديل", "زبون", data.name); toast("تم التعديل"); }
    setModal(null);
  };
  const columns = [{ key: "name", label: "اسم الزبون" }, { key: "workType", label: "نوع العمل" }, { key: "deposit", label: "العربون", render: (r) => money(r.deposit) }, { key: "remaining", label: "الباقي", render: (r) => <b style={{ color: r.remaining > 0 ? "#e5484d" : "#2e9e5b" }}>{money(r.remaining)}</b> }, { key: "act", label: "إجراءات", noSort: true, render: (r) => (<div style={{ display: "flex", gap: 6 }}><button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button><button className="icon-btn" onClick={() => confirm("حذف؟", () => persist.customers(customers.filter((c) => c.id !== r.id)))}><Trash2 size={15} /></button></div>) }];
  return (<div><SectionHead onAdd={() => setModal({ mode: "add", data: {} })} /><DataTable columns={columns} rows={customers} />{modal && <Modal title="بيانات الزبون" onClose={() => setModal(null)} wide><CustomerForm data={modal.data} onSave={save} onClose={() => setModal(null)} /></Modal>}{node}</div>);
}
function CustomerForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ name: "", workType: "", materials: "", invoiceValue: "", design: "", labor: "", deposit: "", invoiceNumber: "", notes: "", ...data });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (<div><Grid2><Field label="اسم الزبون"><input className="input" value={f.name} onChange={set("name")} /></Field><Field label="نوع العمل"><input className="input" value={f.workType} onChange={set("workType")} /></Field></Grid2><Grid2><Field label="تكلفة المواد"><input className="input" type="number" value={f.materials} onChange={set("materials")} /></Field><Field label="قيمة الفاتورة"><input className="input" type="number" value={f.invoiceValue} onChange={set("invoiceValue")} /></Field></Grid2><Grid2><Field label="تكلفة التصميم"><input className="input" type="number" value={f.design} onChange={set("design")} /></Field><Field label="رقم الفاتورة"><input className="input" value={f.invoiceNumber} onChange={set("invoiceNumber")} /></Field></Grid2><Grid2><Field label="تكلفة العمالة"><input className="input" type="number" value={f.labor} onChange={set("labor")} /></Field><Field label="العربون"><input className="input" type="number" value={f.deposit} onChange={set("deposit")} /></Field></Grid2><FormActions onSave={() => onSave(f)} onClose={onClose} /></div>);
}

function Suppliers() {
  const { suppliers, persist, toast, log } = useApp();
  const [modal, setModal] = useState(null);
  const { confirm, node } = useConfirm();
  const save = (data) => {
    const rec = { ...data, remaining: (Number(data.invoice)||0) - (Number(data.paid)||0) };
    if (modal.mode === "add") { persist.suppliers([{ ...rec, id: uid(), createdAt: now() }, ...suppliers]); toast("تم الإضافة"); }
    else { persist.suppliers(suppliers.map((s) => (s.id === modal.data.id ? { ...s, ...rec } : s))); toast("تم التعديل"); }
    setModal(null);
  };
  const columns = [{ key: "name", label: "اسم المورد" }, { key: "goods", label: "نوع البضاعة" }, { key: "remaining", label: "المتبقي", render: (r) => <b style={{ color: r.remaining > 0 ? "#e5484d" : "#2e9e5b" }}>{money(r.remaining)}</b> }, { key: "act", label: "إجراءات", noSort: true, render: (r) => (<div style={{ display: "flex", gap: 6 }}><button className="icon-btn" onClick={() => setModal({ mode: "edit", data: r })}><Pencil size={15} /></button><button className="icon-btn" onClick={() => confirm("حذف؟", () => persist.suppliers(suppliers.filter((s) => s.id !== r.id)))}><Trash2 size={15} /></button></div>) }];
  return (<div><SectionHead onAdd={() => setModal({ mode: "add", data: {} })} /><DataTable columns={columns} rows={suppliers} />{modal && <Modal title="المورد" onClose={() => setModal(null)}><SupplierForm data={modal.data} onSave={save} onClose={() => setModal(null)} /></Modal>}{node}</div>);
}
function SupplierForm({ data, onSave, onClose }) {
  const [f, setF] = useState({ name: "", goods: "", invoice: "", paid: "", notes: "", ...data });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (<div><Grid2><Field label="اسم المورد"><input className="input" value={f.name} onChange={set("name")} /></Field><Field label="البضاعة"><input className="input" value={f.goods} onChange={set("goods")} /></Field></Grid2><Grid2><Field label="قيمة الفاتورة"><input className="input" type="number" value={f.invoice} onChange={set("invoice")} /></Field><Field label="المدفوع"><input className="input" type="number" value={f.paid} onChange={set("paid")} /></Field></Grid2><FormActions onSave={() => onSave(f)} onClose={onClose} /></div>);
}

function Dashboard() {
  const { employees, customers, suppliers, theme } = useApp();
  const totalDeposit = customers.reduce((a, c) => a + (Number(c.deposit) || 0), 0);
  const totalRemaining = customers.reduce((a, c) => a + (Number(c.remaining) || 0), 0);
  const totalInvoices = suppliers.reduce((a, s) => a + (Number(s.invoice) || 0), 0);
  const barData = [{ name: "العربون", value: totalDeposit }, { name: "المتبقي", value: totalRemaining }, { name: "الفواتير", value: totalInvoices }];
  
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <div className="grid-stats">
        <div className="card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 13 }}><div style={{ width: 46, height: 46, borderRadius: 12, background: "#5b74b822", color: "#5b74b8", display: "grid", placeItems: "center" }}><Users size={22} /></div><div><div style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 700 }}>عدد الموظفين</div><div className="heading" style={{ fontSize: 21, fontWeight: 800 }}>{employees.length}</div></div></div>
        <div className="card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 13 }}><div style={{ width: 46, height: 46, borderRadius: 12, background: "#2e9e5b22", color: "#2e9e5b", display: "grid", placeItems: "center" }}><UserRound size={22} /></div><div><div style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 700 }}>عدد الزبائن</div><div className="heading" style={{ fontSize: 21, fontWeight: 800 }}>{customers.length}</div></div></div>
        <div className="card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 13 }}><div style={{ width: 46, height: 46, borderRadius: 12, background: "#d9832422", color: "#d98324", display: "grid", placeItems: "center" }}><Truck size={22} /></div><div><div style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 700 }}>عدد الموردين</div><div className="heading" style={{ fontSize: 21, fontWeight: 800 }}>{suppliers.length}</div></div></div>
      </div>
      <div className="card" style={{ padding: 18 }}>
        <h3 className="heading" style={{ margin: "0 0 14px", fontSize: 16 }}>ملخص التكاليف والإيرادات</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData}><CartesianGrid strokeDasharray="3 3" stroke="var(--line)" /><XAxis dataKey="name" tick={{ fill: "var(--muted)", fontSize: 12 }} /><YAxis tick={{ fill: "var(--muted)", fontSize: 11 }} /><Tooltip contentStyle={{ direction: "rtl", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10 }} /><Bar dataKey="value" fill={BRAND} radius={[8, 8, 0, 0]} /></BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function UsersAdmin() {
  const { users, persist, toast } = useApp();
  const columns = [{ key: "name", label: "الاسم" }, { key: "username", label: "اسم المستخدم" }, { key: "active", label: "الحالة", render: (r) => r.active ? "مفعّل" : "موقوف" }];
  return <div><DataTable columns={columns} rows={users} /></div>;
}

function AuditLog() {
  const { audit } = useApp();
  const columns = [{ key: "user", label: "المستخدم" }, { key: "action", label: "العملية" }, { key: "entity", label: "العنصر" }, { key: "at", label: "الوقت", render: (r) => fmtDate(r.at) }];
  return <DataTable columns={columns} rows={audit} />;
}

function Backup() {
  return <div className="card" style={{ padding: 24 }}><p>لتحميل نسخة احتياطية من البيانات.</p></div>;
}

function Profile() {
  const { session } = useApp();
  return <div className="card" style={{ padding: 24 }}><h3 className="heading">الملف الشخصي</h3><p>الاسم: {session.name}</p></div>;
}

function ToastStack({ toasts }) {
  return (
    <div className="no-print" style={{ position: "fixed", bottom: 20, insetInlineStart: 20, display: "flex", flexDirection: "column", gap: 10, zIndex: 100 }}>
      {toasts.map((t) => (<div key={t.id} style={{ background: "var(--surface)", border: `1px solid ${t.type === "error" ? "#e5484d" : "#2e9e5b"}`, borderRadius: 12, padding: "12px 18px", boxShadow: "var(--shadow)", fontWeight: 700, fontSize: 14 }}>{t.msg}</div>))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));