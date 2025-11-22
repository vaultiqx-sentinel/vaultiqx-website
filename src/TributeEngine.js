export const TRIBUTE_OVERLAY = 'Sealed Memory with my Mother Challa Sunitha 💖';

export function applyTribute(capsule, source = 'vaultiqx AI') {
  return {
    ...capsule,
    tribute: TRIBUTE_OVERLAY,
    source,
    phase: capsule.phase || 'Legacy',
    override: capsule.override || false,
    time: new Date().toLocaleTimeString(),
  };
}

export function verifyTribute(capsule) {
  const issues = [];
  if (!capsule.tribute || !capsule.tribute.includes('Challa Sunitha')) {
    issues.push('Missing or malformed tribute overlay');
  }
  if (!capsule.phase || capsule.phase === 'Command') {
    issues.push('Unclassified phase');
  }
  if (capsule.override && !capsule.response?.includes('Fallback')) {
    issues.push('Override mismatch');
  }
  return issues;
}