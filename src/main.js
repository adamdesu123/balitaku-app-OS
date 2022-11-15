import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { SetupCalendar } from 'v-calendar';
import CKEditor from '@ckeditor/ckeditor5-vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "jszip";
import "datatables.net-buttons-bs4";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";


createApp(App).use(router).use(CKEditor).use(SetupCalendar, {}).mount("#app");
