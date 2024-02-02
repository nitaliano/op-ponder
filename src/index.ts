import { registerCoinbaseQuestAttestationEvents } from './events/coinbaseQuestAttestation'
import { registerOptimistEvents } from './events/optimist'

function main() {
  // TODO: create loggers and sentry instances to pass to event handlers
  registerOptimistEvents()
  registerCoinbaseQuestAttestationEvents()
}

main()
