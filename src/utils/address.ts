import bip39 from 'bip39';

const MNEMONIC_STRENGTH = 15;

export async function createPrivateKey(seed?: string) {}

export function generateMnemonic() {
  return bip39.generateMnemonic(MNEMONIC_STRENGTH);
}

export async function mnemonicToSeed(mnemonic: string) {
  return await bip39.mnemonicToSeed(mnemonic);
}
