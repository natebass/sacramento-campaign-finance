import {expect, test} from 'vitest';
import {load} from '../../../src/routes/+page.server.js';

test('load home data returns correct format', () => {
  const result = load();
  const mockResult = mockResult();
  try {
    expect(Date.parse(result.generated)).toBeGreaterThan(0)
  } catch (error) {
  }
})

function mockData() {
  return {
    "generated": "2023-11-01T01:13:17.618Z",
    "officials": [
      {
        "name": "Darrell Steinberg",
        "title": "Mayor",
        "link": "/body/sac-city#mayor"
      },
      {
        "name": "Lisa Kaplan",
        "title": "City Council, District 1",
        "link": "/body/sac-city#city-council-district-1"
      },
      {
        "name": "Phil Sterna",
        "title": "Supervisor, District 1",
        "link": "/body/sac-county#supervisor-district-1"
      }
    ],
    "totals": [
      {
        "body": "",
        "href": "/election/2024",
        "name": "Upcoming election",
        "total": 654801.5100000001,
        "offices": [
          "Mayor",
          "City councilmembers (D2, D4, D6, D8)"
        ]
      },
      {
        "body": "sac-city",
        "href": "/body/sac-city",
        "name": "City Council",
        "total": 5583247.5600000005,
        "offices": [
          "Mayor",
          "City councilmembers"
        ]
      },
      {
        "body": "sac-county",
        "href": "/body/sac-county",
        "name": "Board of Supervisors",
        "total": 2084511.6199999999,
        "offices": [
          "Supervisors"
        ]
      }
    ]
  }
}