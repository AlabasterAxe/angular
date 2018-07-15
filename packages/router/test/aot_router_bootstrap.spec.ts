import {RouterTestingModule} from '../testing';

import {ROUTES, AotRouterModule} from './aot_router_module';
import {AotRouterModuleNgSummary} from './aot_router_module.ngsummary';
import {TestBed} from '@angular/core/testing';

describe('The Aot Routing Component', () => {
  it('should be able to compile the components.', () => {
    TestBed.configureTestingModule({
      imports: [
        AotRouterModule,
        RouterTestingModule.withRoutes(ROUTES),
      ],
      aotSummaries: () => [AotRouterModuleNgSummary],
    }).compileComponents();
  });
});
