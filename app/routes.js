import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("registro", "routes/registro.tsx"),
  route("registro-usuario", "routes/registro-usuario.tsx"),
];

