--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.7
-- Dumped by pg_dump version 9.6.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE categorias (
    categoriaid integer NOT NULL,
    categoriadescripcion character varying(40) NOT NULL
);


ALTER TABLE categorias OWNER TO postgres;

--
-- Name: categorias_categoriaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE categorias_categoriaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE categorias_categoriaid_seq OWNER TO postgres;

--
-- Name: categorias_categoriaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE categorias_categoriaid_seq OWNED BY categorias.categoriaid;


--
-- Name: clientes; Type: TABLE; Schema: public; Owner: usuario_admin
--

CREATE TABLE clientes (
    clienteid integer NOT NULL,
    clientenombre character varying(30) NOT NULL,
    clientetelefono character(10) NOT NULL,
    clientecalle character varying(30) NOT NULL,
    clientecp character(5) NOT NULL,
    clientecolonia character varying(30) NOT NULL,
    clientenumint character(5) NOT NULL,
    clientenumext character(5) NOT NULL,
    clienteusuario character varying(20) NOT NULL,
    clientepassword character varying(40) NOT NULL,
    clienteemail character varying(50) NOT NULL,
    clienteapellidop character varying(30) NOT NULL,
    clienteapellidom character varying(30) NOT NULL,
    clientedelegacion integer NOT NULL
);


ALTER TABLE clientes OWNER TO usuario_admin;

--
-- Name: clientes_clienteid_seq; Type: SEQUENCE; Schema: public; Owner: usuario_admin
--

CREATE SEQUENCE clientes_clienteid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE clientes_clienteid_seq OWNER TO usuario_admin;

--
-- Name: clientes_clienteid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: usuario_admin
--

ALTER SEQUENCE clientes_clienteid_seq OWNED BY clientes.clienteid;


--
-- Name: delegaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE delegaciones (
    delegacionid integer NOT NULL,
    delegaciondescripcion character varying(40) NOT NULL
);


ALTER TABLE delegaciones OWNER TO postgres;

--
-- Name: delegaciones_delegacionid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE delegaciones_delegacionid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE delegaciones_delegacionid_seq OWNER TO postgres;

--
-- Name: delegaciones_delegacionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE delegaciones_delegacionid_seq OWNED BY delegaciones.delegacionid;


--
-- Name: descuentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE descuentos (
    descuentoid integer NOT NULL,
    descuentoporcentaje integer NOT NULL
);


ALTER TABLE descuentos OWNER TO postgres;

--
-- Name: descuentos_descuentoid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE descuentos_descuentoid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE descuentos_descuentoid_seq OWNER TO postgres;

--
-- Name: descuentos_descuentoid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE descuentos_descuentoid_seq OWNED BY descuentos.descuentoid;


--
-- Name: empleados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE empleados (
    empleadoid integer NOT NULL,
    empleadonombre character varying(30) NOT NULL,
    empleadoapellidop character varying(30) NOT NULL,
    empleadoapellidom character varying(30) NOT NULL,
    empleadotipousuario integer NOT NULL,
    empleadousuario character varying(40) NOT NULL,
    empleadopassword character varying(40) NOT NULL
);


ALTER TABLE empleados OWNER TO postgres;

--
-- Name: empleados_empleadoid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE empleados_empleadoid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE empleados_empleadoid_seq OWNER TO postgres;

--
-- Name: empleados_empleadoid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE empleados_empleadoid_seq OWNED BY empleados.empleadoid;


--
-- Name: equipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE equipos (
    equipoid integer NOT NULL,
    equipodescripcion character varying(40) NOT NULL
);


ALTER TABLE equipos OWNER TO postgres;

--
-- Name: equipos_equipoid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE equipos_equipoid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE equipos_equipoid_seq OWNER TO postgres;

--
-- Name: equipos_equipoid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE equipos_equipoid_seq OWNED BY equipos.equipoid;


--
-- Name: formasdepago; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE formasdepago (
    formadepagoid integer NOT NULL,
    formapagodescripcion character varying(20) NOT NULL
);


ALTER TABLE formasdepago OWNER TO postgres;

--
-- Name: formasdepago_formadepagoid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE formasdepago_formadepagoid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE formasdepago_formadepagoid_seq OWNER TO postgres;

--
-- Name: formasdepago_formadepagoid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE formasdepago_formadepagoid_seq OWNED BY formasdepago.formadepagoid;


--
-- Name: marcas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE marcas (
    marcaid integer NOT NULL,
    marcadescripcion character varying(40) NOT NULL
);


ALTER TABLE marcas OWNER TO postgres;

--
-- Name: marcas_marcaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE marcas_marcaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE marcas_marcaid_seq OWNER TO postgres;

--
-- Name: marcas_marcaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE marcas_marcaid_seq OWNED BY marcas.marcaid;


--
-- Name: playeras; Type: TABLE; Schema: public; Owner: usuario_admin
--

CREATE TABLE playeras (
    playeraid integer NOT NULL,
    playeraprecio money NOT NULL,
    playeraexistencias integer NOT NULL,
    playeraequipo integer NOT NULL,
    playeramarca integer NOT NULL,
    playeratalla integer NOT NULL,
    playeracategoria integer NOT NULL,
    playeratemporada integer NOT NULL,
    playeradescuento integer
);


ALTER TABLE playeras OWNER TO usuario_admin;

--
-- Name: playeras_playeraid_seq; Type: SEQUENCE; Schema: public; Owner: usuario_admin
--

CREATE SEQUENCE playeras_playeraid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE playeras_playeraid_seq OWNER TO usuario_admin;

--
-- Name: playeras_playeraid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: usuario_admin
--

ALTER SEQUENCE playeras_playeraid_seq OWNED BY playeras.playeraid;


--
-- Name: playerasporventa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE playerasporventa (
    playeraventaid integer NOT NULL,
    playeraventa integer NOT NULL,
    ventaid integer NOT NULL,
    playeraventacantidad integer NOT NULL
);


ALTER TABLE playerasporventa OWNER TO postgres;

--
-- Name: playerasporventa_playeraventaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE playerasporventa_playeraventaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE playerasporventa_playeraventaid_seq OWNER TO postgres;

--
-- Name: playerasporventa_playeraventaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE playerasporventa_playeraventaid_seq OWNED BY playerasporventa.playeraventaid;


--
-- Name: tallas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tallas (
    tallaid integer NOT NULL,
    talladescripcion character varying(40) NOT NULL
);


ALTER TABLE tallas OWNER TO postgres;

--
-- Name: tallas_tallaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tallas_tallaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tallas_tallaid_seq OWNER TO postgres;

--
-- Name: tallas_tallaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tallas_tallaid_seq OWNED BY tallas.tallaid;


--
-- Name: temporadas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE temporadas (
    temporadaid integer NOT NULL,
    temporadadescripcion character varying(40) NOT NULL
);


ALTER TABLE temporadas OWNER TO postgres;

--
-- Name: temporadas_temporadaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE temporadas_temporadaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE temporadas_temporadaid_seq OWNER TO postgres;

--
-- Name: temporadas_temporadaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE temporadas_temporadaid_seq OWNED BY temporadas.temporadaid;


--
-- Name: tipousuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tipousuarios (
    tipousuarioid integer NOT NULL,
    tipousuariodescripcion character varying(20) NOT NULL
);


ALTER TABLE tipousuarios OWNER TO postgres;

--
-- Name: tipousuarios_tipousuarioid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tipousuarios_tipousuarioid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tipousuarios_tipousuarioid_seq OWNER TO postgres;

--
-- Name: tipousuarios_tipousuarioid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tipousuarios_tipousuarioid_seq OWNED BY tipousuarios.tipousuarioid;


--
-- Name: ventas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ventas (
    ventaid integer NOT NULL,
    ventaempleado integer,
    ventafecha date NOT NULL,
    ventacliente integer NOT NULL,
    ventaformapago integer NOT NULL
);


ALTER TABLE ventas OWNER TO postgres;

--
-- Name: ventas_ventaid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE ventas_ventaid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ventas_ventaid_seq OWNER TO postgres;

--
-- Name: ventas_ventaid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE ventas_ventaid_seq OWNED BY ventas.ventaid;


--
-- Name: categorias categoriaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categorias ALTER COLUMN categoriaid SET DEFAULT nextval('categorias_categoriaid_seq'::regclass);


--
-- Name: clientes clienteid; Type: DEFAULT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY clientes ALTER COLUMN clienteid SET DEFAULT nextval('clientes_clienteid_seq'::regclass);


--
-- Name: delegaciones delegacionid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY delegaciones ALTER COLUMN delegacionid SET DEFAULT nextval('delegaciones_delegacionid_seq'::regclass);


--
-- Name: descuentos descuentoid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY descuentos ALTER COLUMN descuentoid SET DEFAULT nextval('descuentos_descuentoid_seq'::regclass);


--
-- Name: empleados empleadoid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY empleados ALTER COLUMN empleadoid SET DEFAULT nextval('empleados_empleadoid_seq'::regclass);


--
-- Name: equipos equipoid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipos ALTER COLUMN equipoid SET DEFAULT nextval('equipos_equipoid_seq'::regclass);


--
-- Name: formasdepago formadepagoid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY formasdepago ALTER COLUMN formadepagoid SET DEFAULT nextval('formasdepago_formadepagoid_seq'::regclass);


--
-- Name: marcas marcaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY marcas ALTER COLUMN marcaid SET DEFAULT nextval('marcas_marcaid_seq'::regclass);


--
-- Name: playeras playeraid; Type: DEFAULT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras ALTER COLUMN playeraid SET DEFAULT nextval('playeras_playeraid_seq'::regclass);


--
-- Name: playerasporventa playeraventaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY playerasporventa ALTER COLUMN playeraventaid SET DEFAULT nextval('playerasporventa_playeraventaid_seq'::regclass);


--
-- Name: tallas tallaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tallas ALTER COLUMN tallaid SET DEFAULT nextval('tallas_tallaid_seq'::regclass);


--
-- Name: temporadas temporadaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY temporadas ALTER COLUMN temporadaid SET DEFAULT nextval('temporadas_temporadaid_seq'::regclass);


--
-- Name: tipousuarios tipousuarioid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tipousuarios ALTER COLUMN tipousuarioid SET DEFAULT nextval('tipousuarios_tipousuarioid_seq'::regclass);


--
-- Name: ventas ventaid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ventas ALTER COLUMN ventaid SET DEFAULT nextval('ventas_ventaid_seq'::regclass);


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY categorias (categoriaid, categoriadescripcion) FROM stdin;
1	Local
2	Visita
\.


--
-- Name: categorias_categoriaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('categorias_categoriaid_seq', 2, true);


--
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: usuario_admin
--

COPY clientes (clienteid, clientenombre, clientetelefono, clientecalle, clientecp, clientecolonia, clientenumint, clientenumext, clienteusuario, clientepassword, clienteemail, clienteapellidop, clienteapellidom, clientedelegacion) FROM stdin;
\.


--
-- Name: clientes_clienteid_seq; Type: SEQUENCE SET; Schema: public; Owner: usuario_admin
--

SELECT pg_catalog.setval('clientes_clienteid_seq', 1, false);


--
-- Data for Name: delegaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY delegaciones (delegacionid, delegaciondescripcion) FROM stdin;
1	Álvaro Obregón
2	Azcapotzalco
3	Benito Juárez
4	Coyoacán
5	Cuajimalpa de Morelos
6	Cuauhtémoc
7	Gustavo A. Madero
8	Iztacalco
9	Iztapalapa
10	Magdalena Contreras
11	Miguel Hidalgo
12	Milpa Alta
13	Tláhuac
14	Tlalpan
15	Venustiano Carranza
16	Xochimilco
\.


--
-- Name: delegaciones_delegacionid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('delegaciones_delegacionid_seq', 16, true);


--
-- Data for Name: descuentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY descuentos (descuentoid, descuentoporcentaje) FROM stdin;
1	0
2	5
3	10
4	15
5	20
\.


--
-- Name: descuentos_descuentoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('descuentos_descuentoid_seq', 5, true);


--
-- Data for Name: empleados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY empleados (empleadoid, empleadonombre, empleadoapellidop, empleadoapellidom, empleadotipousuario, empleadousuario, empleadopassword) FROM stdin;
\.


--
-- Name: empleados_empleadoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('empleados_empleadoid_seq', 1, false);


--
-- Data for Name: equipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY equipos (equipoid, equipodescripcion) FROM stdin;
1	America
2	Atlas
3	Cruz Azul
4	Guadalajara
5	León
6	Lobos BUAP
7	Monterrey
8	Morelia
9	Necaxa
10	Pachuca
11	Puebla
12	Querétaro
13	Santos Laguna
14	Tijuana
15	Toluca
16	U.A.N.L.
17	U.N.A.M.
18	Veracruz
\.


--
-- Name: equipos_equipoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('equipos_equipoid_seq', 18, true);


--
-- Data for Name: formasdepago; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY formasdepago (formadepagoid, formapagodescripcion) FROM stdin;
1	Tarjeta débito
2	Tarjeta crédito
3	Efectivo
\.


--
-- Name: formasdepago_formadepagoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('formasdepago_formadepagoid_seq', 3, true);


--
-- Data for Name: marcas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY marcas (marcaid, marcadescripcion) FROM stdin;
1	Adidas
2	Nike
3	Pirma
4	Charly
\.


--
-- Name: marcas_marcaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('marcas_marcaid_seq', 4, true);


--
-- Data for Name: playeras; Type: TABLE DATA; Schema: public; Owner: usuario_admin
--

COPY playeras (playeraid, playeraprecio, playeraexistencias, playeraequipo, playeramarca, playeratalla, playeracategoria, playeratemporada, playeradescuento) FROM stdin;
1	$ 1 200.00	5	1	2	1	1	3	\N
\.


--
-- Name: playeras_playeraid_seq; Type: SEQUENCE SET; Schema: public; Owner: usuario_admin
--

SELECT pg_catalog.setval('playeras_playeraid_seq', 1, true);


--
-- Data for Name: playerasporventa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY playerasporventa (playeraventaid, playeraventa, ventaid, playeraventacantidad) FROM stdin;
\.


--
-- Name: playerasporventa_playeraventaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('playerasporventa_playeraventaid_seq', 1, false);


--
-- Data for Name: tallas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tallas (tallaid, talladescripcion) FROM stdin;
1	Chica
2	Mediana
3	Grande
4	Extra-Grande
\.


--
-- Name: tallas_tallaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tallas_tallaid_seq', 4, true);


--
-- Data for Name: temporadas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY temporadas (temporadaid, temporadadescripcion) FROM stdin;
1	2017A
2	2017C
3	2018A
4	2018C
\.


--
-- Name: temporadas_temporadaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('temporadas_temporadaid_seq', 4, true);


--
-- Data for Name: tipousuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tipousuarios (tipousuarioid, tipousuariodescripcion) FROM stdin;
\.


--
-- Name: tipousuarios_tipousuarioid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tipousuarios_tipousuarioid_seq', 1, false);


--
-- Data for Name: ventas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ventas (ventaid, ventaempleado, ventafecha, ventacliente, ventaformapago) FROM stdin;
\.


--
-- Name: ventas_ventaid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('ventas_ventaid_seq', 1, false);


--
-- Name: categorias categorias_categoriadescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categorias
    ADD CONSTRAINT categorias_categoriadescripcion_key UNIQUE (categoriadescripcion);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (categoriaid);


--
-- Name: clientes clientes_clienteusuario_key; Type: CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY clientes
    ADD CONSTRAINT clientes_clienteusuario_key UNIQUE (clienteusuario);


--
-- Name: clientes clientes_correo_electronico_key; Type: CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY clientes
    ADD CONSTRAINT clientes_correo_electronico_key UNIQUE (clienteemail);


--
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (clienteid);


--
-- Name: delegaciones delegaciones_delegaciondescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY delegaciones
    ADD CONSTRAINT delegaciones_delegaciondescripcion_key UNIQUE (delegaciondescripcion);


--
-- Name: delegaciones delegaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY delegaciones
    ADD CONSTRAINT delegaciones_pkey PRIMARY KEY (delegacionid);


--
-- Name: descuentos descuentos_descuentoporcentaje_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY descuentos
    ADD CONSTRAINT descuentos_descuentoporcentaje_key UNIQUE (descuentoporcentaje);


--
-- Name: descuentos descuentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY descuentos
    ADD CONSTRAINT descuentos_pkey PRIMARY KEY (descuentoid);


--
-- Name: empleados empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (empleadoid);


--
-- Name: equipos equipos_equipodescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipos
    ADD CONSTRAINT equipos_equipodescripcion_key UNIQUE (equipodescripcion);


--
-- Name: equipos equipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equipos
    ADD CONSTRAINT equipos_pkey PRIMARY KEY (equipoid);


--
-- Name: formasdepago formasdepago_formapagodescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY formasdepago
    ADD CONSTRAINT formasdepago_formapagodescripcion_key UNIQUE (formapagodescripcion);


--
-- Name: formasdepago formasdepago_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY formasdepago
    ADD CONSTRAINT formasdepago_pkey PRIMARY KEY (formadepagoid);


--
-- Name: marcas marcas_marcadescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY marcas
    ADD CONSTRAINT marcas_marcadescripcion_key UNIQUE (marcadescripcion);


--
-- Name: marcas marcas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY marcas
    ADD CONSTRAINT marcas_pkey PRIMARY KEY (marcaid);


--
-- Name: playeras playeras_pkey; Type: CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT playeras_pkey PRIMARY KEY (playeraid);


--
-- Name: playerasporventa playerasporventa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY playerasporventa
    ADD CONSTRAINT playerasporventa_pkey PRIMARY KEY (playeraventaid);


--
-- Name: tallas tallas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tallas
    ADD CONSTRAINT tallas_pkey PRIMARY KEY (tallaid);


--
-- Name: tallas tallas_talladescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tallas
    ADD CONSTRAINT tallas_talladescripcion_key UNIQUE (talladescripcion);


--
-- Name: temporadas temporadas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY temporadas
    ADD CONSTRAINT temporadas_pkey PRIMARY KEY (temporadaid);


--
-- Name: temporadas temporadas_temporadadescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY temporadas
    ADD CONSTRAINT temporadas_temporadadescripcion_key UNIQUE (temporadadescripcion);


--
-- Name: tipousuarios tipousuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tipousuarios
    ADD CONSTRAINT tipousuarios_pkey PRIMARY KEY (tipousuarioid);


--
-- Name: tipousuarios tipousuarios_tipousuariodescripcion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tipousuarios
    ADD CONSTRAINT tipousuarios_tipousuariodescripcion_key UNIQUE (tipousuariodescripcion);


--
-- Name: ventas ventas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (ventaid);


--
-- Name: playeras asignacategoria; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT asignacategoria FOREIGN KEY (playeracategoria) REFERENCES categorias(categoriaid) ON UPDATE CASCADE;


--
-- Name: ventas asignacliente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ventas
    ADD CONSTRAINT asignacliente FOREIGN KEY (ventacliente) REFERENCES clientes(clienteid);


--
-- Name: playeras asignadescuento; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT asignadescuento FOREIGN KEY (playeradescuento) REFERENCES descuentos(descuentoid);


--
-- Name: playeras asignaequipo; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT asignaequipo FOREIGN KEY (playeraequipo) REFERENCES equipos(equipoid) ON UPDATE CASCADE;


--
-- Name: ventas asignaformadepago; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ventas
    ADD CONSTRAINT asignaformadepago FOREIGN KEY (ventaformapago) REFERENCES formasdepago(formadepagoid);


--
-- Name: playeras asignamarca; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT asignamarca FOREIGN KEY (playeramarca) REFERENCES marcas(marcaid) ON UPDATE CASCADE;


--
-- Name: playerasporventa asignaplayeras; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY playerasporventa
    ADD CONSTRAINT asignaplayeras FOREIGN KEY (playeraventaid) REFERENCES playeras(playeraid);


--
-- Name: playeras asignatalla; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY playeras
    ADD CONSTRAINT asignatalla FOREIGN KEY (playeratalla) REFERENCES tallas(tallaid) ON UPDATE CASCADE;


--
-- Name: ventas asignavendedor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ventas
    ADD CONSTRAINT asignavendedor FOREIGN KEY (ventaempleado) REFERENCES empleados(empleadoid);


--
-- Name: playerasporventa asignaventa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY playerasporventa
    ADD CONSTRAINT asignaventa FOREIGN KEY (ventaid) REFERENCES ventas(ventaid);


--
-- Name: clientes delegaciondelcliente; Type: FK CONSTRAINT; Schema: public; Owner: usuario_admin
--

ALTER TABLE ONLY clientes
    ADD CONSTRAINT delegaciondelcliente FOREIGN KEY (clientedelegacion) REFERENCES delegaciones(delegacionid) ON UPDATE CASCADE;


--
-- Name: empleados tipodeusuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY empleados
    ADD CONSTRAINT tipodeusuario FOREIGN KEY (empleadotipousuario) REFERENCES tipousuarios(tipousuarioid);


--
-- PostgreSQL database dump complete
--

