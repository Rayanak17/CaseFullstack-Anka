import { WalletService } from './service';

export class WalletController {
  private service = new WalletService();

  create = async (data: { clientId: string; totalValue: number; allocations: any }) => {
    return this.service.createWallet(data.clientId, data.totalValue, data.allocations);
  };

  getByClient = async (clientId: string) => {
    return this.service.getWalletByClient(clientId);
  };

  update = async (clientId: string, data: Partial<{ totalValue: number; allocations: any }>) => {
    return this.service.updateWallet(clientId, data);
  };

  delete = async (clientId: string) => {
    return this.service.deleteWallet(clientId);
  };
}
