---
title: ApplicationEvents
id: version-3.0.0-applicationevents
original_id: applicationevents
---

# `Enumeration` ApplicationEvents

Application-level events that modules, services and factories can listen to.

## Index

### Enumeration members

* [Ready](applicationevents#ready)

---

## Enumeration members

<a id="ready"></a>

###  Ready

**Ready**:  = "Application.Ready"

*Defined in [Library/Application/ApplicationEvents.ts:10](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/ApplicationEvents.ts#L10)*

This event is dispatched after the application was completelly bootstraped. You can listen for this event if you need to execute a hook right before the application launches.

___

