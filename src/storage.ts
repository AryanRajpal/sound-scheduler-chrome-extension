const STORAGE_KEY = "soundSchedulerAvailability";

export type AvailabilityMap = Record<string, boolean>;

export async function loadAvailability(): Promise<AvailabilityMap> {
  const result = await chrome.storage.local.get(STORAGE_KEY);

  return result[STORAGE_KEY] ?? {};
}

export async function saveAvailability(availability: AvailabilityMap): Promise<void> {
  await chrome.storage.local.set({
    [STORAGE_KEY]: availability
  });
}

export async function clearAvailability(): Promise<void> {
  await chrome.storage.local.remove(STORAGE_KEY);
}
