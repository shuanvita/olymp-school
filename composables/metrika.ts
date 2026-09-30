export function ym_event(event: any) {
  if((process.env.NODE_ENV === 'development') || !!import.meta.env.DEV){
    console.log(event)
  }else{
    ym(96083258, 'reachGoal', event)
  }
}
