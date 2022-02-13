// 引入并使用 user 状态
import useUser from "./user";
const user = useUser();
// 引入并使用 study 状态
import useStudy from "./study";
const study = useStudy();

// 导出所有状态
export { user, study };
