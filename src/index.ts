import { logger } from './logger'
import { network } from './network'
import { chainManager } from './chain'
import { mempool } from './mempool'
import { AnnotatedError } from './message'
import { miner } from './mining/miner'

const BIND_PORT = 18018
const BIND_IP = '0.0.0.0'

logger.info(`Malibu - A Marabu node`)
logger.info(`Brendan McLaughlin & James Stevens`)

async function main() {
  await chainManager.init()
  await mempool.init()
  network.init(BIND_PORT, BIND_IP)
  miner.sendNewWork()
}

main()
