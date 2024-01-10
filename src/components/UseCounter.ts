import {ref} from "vue";
import {ICounter} from "../components/Counter.vue";

export const useCounter: () => ICounter = () => {

    const count = ref(0)

    return {
        count
    }
}
