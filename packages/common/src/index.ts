/** @pf/common — minimal exports for now (C-3 will flesh this out). */
export type TenantContext = {
  tenantId: string;
  userId?: string;
  email?: string;
  requestId?: string;
};
export const VERSION = "0.0.0";
