/* eslint-disable no-mixed-spaces-and-tabs */
import initialState from "../../store/initialState";

const menuInitialState = {
	...initialState,
	menu: [
		{
		   menuId: "91043694-0598-4aff-3064-08d7a04180f7",
		   label: "Usuarios",
		   icon: "supervisor_account",
		   url: "/admin/users"
		},
		{
		   menuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
		   label: "Configuraciones",
		   icon: "settings",
		   subMenus: [
			  {
				 menuId: "a9e8e62a-518b-4980-b595-08d7a366cfcb",
				 subMenuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
				 label: "Premios",
				 icon: "emoji_events",
				 url: "/admin/configs/awards"
			  },
			  {
				 menuId: "b17840a0-3b73-438c-6820-08d7a4270f44",
				 subMenuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
				 label: "Puntos",
				 icon: "plus_one",
				 url: "/admin/configs/scores"
			  },
			  {
				 menuId: "c2c1d0ed-908f-45f8-6bfc-08d819efbe08",
				 subMenuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
				 label: "Campañas",
				 icon: "insert_invitation",
				 url: "/admin/configs/campaings"
			  },
			  {
				 menuId: "42aaafdf-9298-4894-6bfd-08d819efbe08",
				 subMenuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
				 label: "Horarios",
				 icon: "timer",
				 url: "/admin/configs/schedule"
			  },
			  {
				 menuId: "5590680c-0e5c-4c32-b269-08d8245b2069",
				 subMenuId: "ef74a1b1-9599-431b-b594-08d7a366cfcb",
				 label: "General",
				 icon: "build",
				 url: "/admin/configs/general"
			  }
		   ]
		},
		/* {
		   menuId: "5085a31e-6b79-4f61-fd13-08d7af3e0810",
		   label: "Reportes",
		   icon: "bar_chart",
		   subMenus: [
			  {
				 menuId: "04771d60-8136-4064-8390-08d7affe5066",
				 subMenuId: "5085a31e-6b79-4f61-fd13-08d7af3e0810",
				 label: "Participación",
				 icon: "people_alt",
				 url: "/admin/reports/involvement"
			  },
			  {
				 menuId: "fc0adbd5-fc26-409c-8391-08d7affe5066",
				 subMenuId: "5085a31e-6b79-4f61-fd13-08d7af3e0810",
				 label: "Viajes",
				 icon: "directions_car",
				 url: "/admin/reports/travels"
			  },
			  {
				 menuId: "d7507a6b-64a8-4774-8392-08d7affe5066",
				 subMenuId: "5085a31e-6b79-4f61-fd13-08d7af3e0810",
				 label: "Indicadores",
				 icon: "eco",
				 url: "/admin/reports/indicators"
			  }
		   ]
		} */
		{
		   menuId: "db42933f-99a5-4bb7-3b95-08d812fff74c",
		   label: "Viajes",
		   icon: "alt_route",
		   url: "/admin/travels"
		},
		{
		   menuId: "c4949859-0943-4fa5-430d-08d7a6828b30",
		   label: "Rutas Empresariales",
		   icon: "transfer_within_a_station",
		   url: "/admin/business-routes"
		},
		{
		   menuId: "607e4f5d-c649-453a-ff97-08d7a40beefb",
		   label: "Oficinas",
		   icon: "business",
		   url: "/admin/offices"
		},
		{
		   menuId: "a2178b58-4c78-42ff-1f04-08d81490b73d",
		   label: "Áreas empresariales",
		   icon: "psychology",
		   url: "/admin/areas"
		}
	 ]
};

export default menuInitialState;
