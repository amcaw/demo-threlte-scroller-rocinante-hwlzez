<script>
  import { fractionalUpdates, float, globalShipPosition, globalShipRotation } from '$lib/settings';

</script>

<div class="settings">
  <label class="fractional-updates">
    <input type="checkbox" bind:checked={$fractionalUpdates}>
    SCROLL SCRUB
  </label>
  <label class="float">
    <input type="checkbox" bind:checked={$float}>
    FLOAT
  </label>
  <div class="spacer" />
  <div class="tx-box">
    <p>SHIP POSITION:</p>
    <p class="num">x:{$globalShipPosition[0].toFixed(2)}</p>
    <p class="num">y:{$globalShipPosition[1].toFixed(2)}</p>
    <p class="num">z:{$globalShipPosition[2].toFixed(2)}</p>
  </div>
  <div class="tx-box">
    <p>SHIP ROTATION:</p>
    <p class="num">x:{$globalShipRotation[0].toFixed(2)}</p>
    <p class="num">y:{$globalShipRotation[1].toFixed(2)}</p>
    <p class="num">z:{$globalShipRotation[2].toFixed(2)}</p>
  </div>
</div>

<style>
  .settings {
    background: #010101dd;
    padding: 0 0.75rem;
    max-width: 100%;
    color: #fafbfc;
    font-size: 0.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 3rem;
  }

  .spacer {
    flex-grow: 1;
  }
  p {
    margin: 0;
    font-variant-numeric: tabular-nums;
  }

  .settings label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tx-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  .tx-box .num {
    width: 40px;
  }
</style>