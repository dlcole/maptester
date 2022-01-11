

export function onNavigatingTo(args) {
  const page = args.object;
  viewModel = page.navigationContext.bindingContext;
  page.bindingContext = viewModel;
}   

export function onBackTap(args) {
  args.object.page.frame.goBack();
}

export function onMapReady(args) {
  console.log("map-page.onMapReady...");
}
