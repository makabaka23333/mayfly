package mayfly.common.permission.registry;

import mayfly.common.permission.checker.SysPermissionChecker;

/**
 * 系统所有权限码注册器（用于实时禁用删除权限等）
 * @author meilin.huang
 * @version 1.0
 * @date 2019-03-28 10:47 AM
 */
public interface SysPermissionCodeRegistry extends SysPermissionChecker {
    /**
     * 保存系统所有权限
     * @return
     */
    void save();

    /**
     * 重命名 (用于实时重命名系统权限中的状态，以便用于判断权限是否可用）
     * @param oldCode
     * @param newCode
     */
    void rename(String oldCode, String newCode);

    /**
     * 删除指定系统权限
     * @param code
     */
    void delete(String code);
}
