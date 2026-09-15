export type TimeRange = { startsAt: Date; endsAt: Date };
export function isValidRange(range: TimeRange) {
  return range.endsAt.getTime() > range.startsAt.getTime();
}
export function overlaps(left: TimeRange, right: TimeRange) {
  return left.startsAt < right.endsAt && right.startsAt < left.endsAt;
}
