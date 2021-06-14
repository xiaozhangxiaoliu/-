export default {
    computed: {
        list() {
            let list = Object.getOwnPropertyNames(this.city).slice(
                0,
                Object.getOwnPropertyNames(this.city).length - 1
            );
            return list;
        }
    },
    data() {
        return {
            lists: Object.getOwnPropertyNames(this.city).slice(
                0,
                Object.getOwnPropertyNames(this.city).length - 1
            )
        }
    }
}