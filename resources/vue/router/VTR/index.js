import fillGasoline from './fillGasoline'
import logbook from './logbook'
import maintenanceTypes from './maintenanceTypes'
import maintenances from './maintenances'
import vtr from './vtr'
import vtrType from './vtrType'

export default [
  ...fillGasoline,
  ...logbook,
  ...maintenanceTypes,
  ...maintenances,
  ...vtr,
  ...vtrType,
]
