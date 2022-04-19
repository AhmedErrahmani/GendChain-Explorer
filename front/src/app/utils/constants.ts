import {MenuItem} from '../models/menu_item.model';
import {ErcName, FunctionName, ThemeColor} from './enums';

export const THEME_SETTINGS = {
  color: ThemeColor.LIGHT,
};

export const LOISY_NAMES = {
  [ThemeColor.LIGHT]: 'logo_fullcolor.svg',
  [ThemeColor.DARK]: 'logo_allwhite.svg',
};

export const ROUTES = {
  HOME: 'home',
  BLOCK: 'block',
  ADDRESS_FULL: 'address',
  ADDRESS: 'addr',
  TOKEN: 'token',
  RICHLIST: 'richlist',
  TRANSACTION: 'tx',
  SETTINGS: 'settings',
  VERIFY: 'verify',
  WALLET: 'wallet',
  CREATE_WALLET: 'create-account',
  SEND_TX: 'send-tx',
  SIGNERS: 'signers',
  CONTRACTS: 'contracts',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Main',
    link: ROUTES.HOME,
  },
  {
    title: 'Wallet',
    link: ROUTES.WALLET,
  },
  {
    title: 'Signers',
    link: ROUTES.SIGNERS,
  },
];

export const DEFAULT_GAS_LIMIT = 21000;

export const TOKEN_TYPES = {
  Isy20: 'ISY20',
  Isy20Burnable: 'ISY20 Burnable',
  Isy20Capped: 'ISY20 Capped',
  Isy20Detailed: 'ISY20 Detailed',
  Isy20Mintable: 'ISY20 Mintable',
  Isy20Pausable: 'ISY20 Pausable',
  Isy165: 'ISY165',
  Isy721: 'ISY721',
  Isy721Burnable: 'ISY721 Burnable',
  Isy721Receiver: 'ISY721 Receiver',
  Isy721Metadata: 'ISY721 Metadata',
  Isy721Enumerable: 'ISY721 Enumerable',
  Isy721Pausable: 'ISY721 Pausable',
  Isy721Mintable: 'ISY721 Mintable',
  Isy721MetadataMintable: 'ISY721 Metadata Mintable',
  Isy721Full: 'ISY721 Full',
  Isy820: 'ISY820',
  Isy1155: 'ISY1155',
  Isy1155Receiver: 'ISY1155 Receiver',
  Isy1155Metadata: 'ISY1155 Metadata',
  Isy223: 'ISY223',
  Isy223Receiver: 'ISY223 Receiver',
  Isy621: 'ISY621',
  Isy777: 'ISY777',
  Isy777Receiver: 'ISY777 Receiver',
  Isy777Sender: 'ISY777 Sender',
  Isy827: 'ISY827',
  Isy884: 'ISY884',
  Upgradeable: 'Upgradeable',
  Ownable: 'Ownable',
  PauserRole: 'Pauser Role',
  IsyFS: 'IsyFS',
};

export const ERC_INTERFACE_IDENTIFIERS = {
  [ErcName.AllFunctions]: Object.keys(FunctionName),
  [ErcName.Isy20]: [FunctionName.Allowance, FunctionName.Approve, FunctionName.BalanceOf, FunctionName.TotalSupply,
    FunctionName.Transfer, FunctionName.TransferFrom, FunctionName.Decimals, FunctionName.Name, FunctionName.Symbol],
  [ErcName.Isy721]: [FunctionName.Approve, FunctionName.BalanceOf, FunctionName.GetApproved, FunctionName.IsApprovedForAll,
    FunctionName.OwnerOf, FunctionName.SafeTransferFrom, FunctionName.SafeTransferFromData, FunctionName.SetApprovalForAll, FunctionName.TransferFrom],
  [ErcName.Isy165]: [FunctionName.SupportsInterface],
  [ErcName.Upgradeable]: [FunctionName.Target, FunctionName.Upgrade, FunctionName.Pause, FunctionName.Paused, FunctionName.Resume, FunctionName.Owner],
};

export const TOKEN_ABI_NAMES: string[] = ['totalSupply', 'balanceOf'];

export const META_TITLES = {
  DEFAULT: {
    title: 'GendChain Explorer',
  },
  HOME: {
    title: 'Home',
  },
  BLOCK: {
    title: 'Block',
  },
  ADDRESS: {
    title: 'Address',
  },
  CONTRACT: {
    title: 'Contract',
  },
  TOKEN: {
    title: 'Token',
  },
  RICHLISLT: {
    title: 'Richlist',
  },
  CONTRACTS: {
    title: 'Contracts List',
  },
  TRANSACTION: {
    title: 'Transaction',
  },
  VERIFY: {
    title: 'Verify contract',
  },
  SEND_TX: {
    title: 'Send transaction',
  },
  SIGNERS: {
    title: 'Signers',
  },
  WALLET: {
    title: 'Wallet',
  },
  CREATE_WALLET: {
    title: 'Create account',
  },
  SEND_WALLET: {
    title: 'Send GEN',
  },
  DEPLOY_CONTRACT: {
    title: 'Deploy contract',
  },
  USE_CONTRACT: {
    title: 'Interact with a Smart Contract',
  },
  OPEN_WALLET: {
    title: 'Open wallet',
  },
  NOT_FOUND: {
    title: 'Not found',
  },
};
