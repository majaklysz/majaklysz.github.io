import {get, ref} from "firebase/database";
import {onMounted, ref as vueRef} from "vue";

import {database} from "../firebaseConfig";

interface Project {
  id: string;
  name: string;
  overview: string;
  mockupImageUrl: string;
  coverImageUrl: string;
  buttons: {[key: string]: string}[];
  type: string;
}

export function useProjects() {
  const projects = vueRef<Project[]>([]);

  const fetchProjects = async () => {
    const dbRef = ref(database, "projects");
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        projects.value = Object.values(snapshot.val());
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMounted(fetchProjects);

  return {projects};
}
